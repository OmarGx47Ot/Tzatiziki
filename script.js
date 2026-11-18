/* =========================================
   OUZO & OLIVE — INTERACTIVE RECIPE WEBSITE
   ========================================= */

'use strict';

/* =========================================
   1. TAILWIND COLOR CONFIGURATION
   ========================================= */

window.tailwind = window.tailwind || {};

window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                aegean: {
                    50: '#EAF1EE',
                    100: '#D5E3DC',
                    500: '#0D3B2E',
                    800: '#0D3B2E',
                    900: '#082A20'
                },

                olive: {
                    50: '#EAF1EE',
                    500: '#0D3B2E',
                    600: '#0D3B2E',
                    700: '#082A20'
                },

                sand: '#FAF7F2',
                warmcard: '#FAF7F2',
                cream: '#FAF7F2',
                phthalo: '#0D3B2E',
                'phthalo-dark': '#082A20',
                'phthalo-border': '#D5E3DC'
            },

            fontFamily: {
                serif: ['Cinzel', 'serif'],
                sans: ['Plus Jakarta Sans', 'sans-serif']
            }
        }
    }
};


/* =========================================
   2. INGREDIENT DATA
   ========================================= */

const baseIngredients = [
    {
        id: 1,
        name: "Plain Strained Greek Yogurt (Full Fat 5%+)",
        baseQty: 2,
        unit: "cups",
        icon: "fa-cow"
    },
    {
        id: 2,
        name: "English Cucumber (Grated & Thoroughly Squeezed)",
        baseQty: 1,
        unit: "large cucumber",
        icon: "fa-leaf"
    },
    {
        id: 3,
        name: "Extra Virgin Olive Oil",
        baseQty: 2,
        unit: "tbsp",
        icon: "fa-bottle-droplet"
    },
    {
        id: 4,
        name: "Fresh Garlic (Microplaned or Minced)",
        baseQty: 3,
        unit: "cloves",
        icon: "fa-mortar-pestle"
    },
    {
        id: 5,
        name: "Fresh Dill or Mint (Finely Chopped)",
        baseQty: 2,
        unit: "tbsp",
        icon: "fa-seedling"
    },
    {
        id: 6,
        name: "Fresh Lemon Juice",
        baseQty: 1,
        unit: "tbsp",
        icon: "fa-lemon"
    },
    {
        id: 7,
        name: "Red Wine Vinegar",
        baseQty: 1,
        unit: "tsp",
        icon: "fa-wine-bottle"
    },
    {
        id: 8,
        name: "Fine Sea Salt (Half for draining, half to taste)",
        baseQty: 0.75,
        unit: "tsp",
        icon: "fa-salt-shaker"
    },
    {
        id: 9,
        name: "Freshly Ground Black Pepper",
        baseQty: 0.25,
        unit: "tsp",
        icon: "fa-pepper-hot"
    }
];


/* =========================================
   3. APPLICATION STATE
   ========================================= */

let currentScale = 1.0;

let checkedIngredients = new Set();

let checkedSteps = new Set();

let timerInterval = null;

let timerSeconds = 600;

let isTimerRunning = false;

const Copied_Message_Milliseconds = 2000;
const Copy_Button_Default_Label = 'Copy Shopping List';
const Copy_Button_Success_Label = 'Copied!';


/* =========================================
   4. INITIALIZE APPLICATION
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    bindUIEvents();

    renderIngredients();

    updateProgress();

    updateTimerDisplay();

});


/* =========================================
   5. EVENT LISTENERS
   ========================================= */

function bindUIEvents() {

    // Ingredient scaling buttons
    document.querySelectorAll('[data-scale]').forEach(button => {

        button.addEventListener('click', () => {

            changeScale(Number(button.dataset.scale));

        });

    });


    // Step completion checkboxes
    document.querySelectorAll('[data-step]').forEach(checkbox => {

        checkbox.addEventListener('change', () => {

            toggleStep(Number(checkbox.dataset.step));

        });

    });


    // Timer buttons
    document
        .querySelector('[data-timer-action="toggle"]')
        ?.addEventListener('click', toggleTimer);


    document
        .querySelector('[data-timer-action="reset"]')
        ?.addEventListener('click', resetTimer);


    // FAQ buttons
    document.querySelectorAll('[data-faq]').forEach(button => {

        button.addEventListener('click', () => {

            toggleFaq(Number(button.dataset.faq));

        });

    });

const Copy_List_Button_Element = document.getElementById('copyListBtn');

Copy_List_Button_Element?.addEventListener('click', copyShoppingList);

    // Hero image fallback
    const heroImage = document.getElementById('heroImage');

    heroImage?.addEventListener('error', () => {

        heroImage.src =
            'https://placehold.co/600x600/0D3B2E/FAF7F2?text=Greek+Gyro+Sauce';

    }, { once: true });

}


/* =========================================
   6. INGREDIENT SCALING
   ========================================= */

function changeScale(delta) {

    const newScale = currentScale + delta;

    if (newScale < 0.5 || newScale > 4.0) {
        return;
    }

    currentScale = newScale;

    const scaleLabel = document.getElementById('scaleLabel');

    const servingsDisplay =
        document.getElementById('heroServingsDisplay');

    if (scaleLabel) {

        scaleLabel.innerText =
            `${currentScale}x (${Math.round(currentScale * 2)} cups)`;

    }

    if (servingsDisplay) {

        servingsDisplay.innerText =
            `${Math.round(currentScale * 6)}-${Math.round(currentScale * 8)} Servings`;

    }

    renderIngredients();

}


/* =========================================
   7. RENDER INGREDIENT CARDS
   ========================================= */

function renderIngredients() {

    const container = document.getElementById('ingredientsList');

    if (!container) return;

    container.innerHTML = '';

    baseIngredients.forEach(item => {

        const scaledQty =
            formatQuantity(item.baseQty * currentScale);

        const isChecked =
            checkedIngredients.has(item.id);


        const card = document.createElement('div');

        card.className = `
            p-4
            rounded-2xl
            border
            transition-all
            flex
            items-center
            justify-between
            gap-3
            cursor-pointer
            ${
                isChecked
                    ? 'bg-cream border-phthalo-border opacity-60 line-through'
                    : 'bg-cream border-phthalo-border hover:border-phthalo hover:bg-aegean-50'
            }
        `;

        card.addEventListener('click', () => {

            toggleIngredient(item.id);

        });


        card.innerHTML = `
            <div class="flex items-center gap-3">

                <input
                    type="checkbox"
                    ${isChecked ? 'checked' : ''}
                    class="w-5 h-5 rounded text-phthalo focus:ring-phthalo border-phthalo-border pointer-events-none"
                    aria-label="Mark ${item.name} as gathered"
                >

                <span class="text-sm font-medium text-phthalo">
                    ${item.name}
                </span>

            </div>

            <span class="
                font-bold
                text-xs
                sm:text-sm
                text-aegean-800
                bg-cream
                px-3
                py-1
                rounded-full
                border
                border-phthalo-border
                whitespace-nowrap
                shadow-xs
            ">
                ${scaledQty} ${item.unit}
            </span>
        `;

        container.appendChild(card);

    });

}


/* =========================================
   8. FORMAT INGREDIENT QUANTITIES
   ========================================= */

function formatQuantity(num) {

    const fractions = {
        0.25: "1/4",
        0.5: "1/2",
        0.75: "3/4",
        1.25: "1 1/4",
        1.5: "1 1/2",
        1.75: "1 3/4"
    };

    if (fractions[num]) {

        return fractions[num];

    }

    return Number.isInteger(num)
        ? num.toString()
        : num.toFixed(1);

}


/* =========================================
   9. INGREDIENT CHECKLIST
   ========================================= */

function toggleIngredient(id) {

    if (checkedIngredients.has(id)) {

        checkedIngredients.delete(id);

    } else {

        checkedIngredients.add(id);

    }

    renderIngredients();

}


/* =========================================
   10. STEP COMPLETION TRACKER
   ========================================= */

function toggleStep(stepNum) {

    const card =
        document.getElementById(`stepCard${stepNum}`);

    const checkbox =
        document.getElementById(`step${stepNum}Check`);

    if (!card || !checkbox) return;


    if (checkbox.checked) {

        checkedSteps.add(stepNum);

        card.classList.remove('bg-cream', 'border-phthalo-border');

        card.classList.add('bg-aegean-50', 'border-phthalo');

    } else {

        checkedSteps.delete(stepNum);

        card.classList.remove('bg-aegean-50', 'border-phthalo');

        card.classList.add('bg-cream', 'border-phthalo-border');

    }

    updateProgress();

}


/* =========================================
   11. UPDATE RECIPE PROGRESS
   ========================================= */

function updateProgress() {

    const count = checkedSteps.size;

    const total = 5;

    const percent = (count / total) * 100;


    const progressText =
        document.getElementById('progressText');

    const progressBar =
        document.getElementById('progressBar');


    if (progressText) {

        progressText.innerText =
            `${count} of ${total} Done`;

    }

    if (progressBar) {

        progressBar.style.width =
            `${percent}%`;

    }

}


/* =========================================
   12. INTERACTIVE TIMER
   ========================================= */

function toggleTimer() {

    const btn =
        document.getElementById('startTimerBtn');

    if (!btn) return;


    // Pause timer
    if (isTimerRunning) {

        clearInterval(timerInterval);

        isTimerRunning = false;

        btn.innerText = "Resume Timer";

        btn.className =
            "px-4 py-2 bg-aegean-800 hover:bg-aegean-900 text-cream text-xs font-semibold rounded-lg transition-all shadow-sm";

        return;

    }


    // Start or resume timer
    isTimerRunning = true;

    btn.innerText = "Pause Timer";

    btn.className =
        "px-4 py-2 bg-cream hover:bg-aegean-50 text-phthalo ring-1 ring-inset ring-phthalo text-xs font-semibold rounded-lg transition-all shadow-sm";


    timerInterval = setInterval(() => {

        if (timerSeconds > 0) {

            timerSeconds--;

            updateTimerDisplay();

        } else {

            clearInterval(timerInterval);

            isTimerRunning = false;

            btn.innerText = "Time's Up!";

            btn.className =
                "px-4 py-2 bg-aegean-900 text-cream ring-2 ring-inset ring-phthalo-border text-xs font-semibold rounded-lg shadow-sm";

        }

    }, 1000);

}


/* =========================================
   13. RESET TIMER
   ========================================= */

function resetTimer() {

    clearInterval(timerInterval);

    isTimerRunning = false;

    timerSeconds = 600;


    updateTimerDisplay();


    const btn =
        document.getElementById('startTimerBtn');

    if (!btn) return;


    btn.innerText = "Start 10 Min Timer";

    btn.className =
        "px-4 py-2 bg-aegean-800 hover:bg-aegean-900 text-cream text-xs font-semibold rounded-lg transition-all shadow-sm";

}


/* =========================================
   14. UPDATE TIMER DISPLAY
   ========================================= */

function updateTimerDisplay() {

    const timerDisplay =
        document.getElementById('timerDisplay');

    if (!timerDisplay) return;


    const mins =
        Math.floor(timerSeconds / 60);

    const secs =
        timerSeconds % 60;


    timerDisplay.innerText =
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

}


/* =========================================
   15. FAQ ACCORDION
   ========================================= */

function toggleFaq(index) {

    const answer =
        document.getElementById(`faqAnswer${index}`);

    const icon =
        document.getElementById(`faqIcon${index}`);

    if (!answer || !icon) return;


    if (answer.classList.contains('hidden')) {

        answer.classList.remove('hidden');

        icon.classList.add('rotate-180');

    } else {

        answer.classList.add('hidden');

        icon.classList.remove('rotate-180');

    }

}

/* dark mode */

function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);

    const icon = document.getElementById('themeIcon');

    if (icon) {
        icon.classList.toggle('fa-moon', !isDark);
        icon.classList.toggle('fa-sun', isDark);
    }

    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', isDark ? '#0A1F18' : '#0D3B2E');
}

function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');

    applyTheme(isDark);

    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(document.documentElement.classList.contains('dark'));

    document
        .getElementById('themeToggle')
        ?.addEventListener('click', toggleTheme);
});

function copyShoppingList() {
    const Copy_List_Label_Element = document.getElementById('copyListLabel');

    const Ingredient_Card_Elements = Array.from(document.querySelectorAll('#ingredientsList > div'));

    const Shopping_List_Lines = Ingredient_Card_Elements.map((Ingredient_Card_Element) => {
        const Ingredient_Name_Text = Ingredient_Card_Element.querySelector(':scope > div > span').textContent.trim();
        const Ingredient_Quantity_Text = Ingredient_Card_Element.querySelector(':scope > span').textContent.trim();

        return `- ${Ingredient_Quantity_Text} ${Ingredient_Name_Text}`;
    });
    
    const Shopping_List_Text = Shopping_List_Lines.join('\n');

    navigator.clipboard.writeText(Shopping_List_Text).then(() => {
        Copy_List_Label_Element.textContent = Copy_Button_Success_Label;

        setTimeout(() => {
            Copy_List_Label_Element.textContent = Copy_Button_Default_Label;
        }, Copied_Message_Milliseconds);
    });
}

/* =========================================
   END OF OUZO & OLIVE JAVASCRIPT
   ========================================= */