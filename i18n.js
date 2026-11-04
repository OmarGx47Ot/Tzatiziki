/* language switcher */

(function () {
    'use strict';

    const AR = {
        "Tzatziki Sauce": "صوص التزاتزيكي",
        "\"The secret is in the cucumber drain!\" — Chef Omar Rafeek": "\"السر في تصفية الخيار!\" — الشيف عمر رفيق",
        "Authentic Greek Tzatziki Sauce Recipe": "وصفة صوص التزاتزيكي اليوناني الأصيل",
        "You can, but authentic restaurant style Tzatziki sauce relies on full-fat Greek yogurt (typically 5% or 10%) for its lush texture and to balance the garlic's punch. If using 0% fat yogurt, add an extra tablespoon of Extra Virgin Olive Oil.": "يمكنك ذلك، لكن صوص التزاتزيكي الأصيل بطريقة المطاعم يعتمد على الزبادي اليوناني كامل الدسم (عادةً 5% أو 10%) لقوامه الغني ولموازنة حدّة الثوم. وإذا استخدمت زبادي 0% دسم، أضف ملعقة كبيرة إضافية من زيت الزيتون البكر الممتاز.",
        // Page title
        "Authentic Greek Gyro House Sauce Recipe": "وصفة صوص الجيرو اليوناني الأصيل",
        "Tzatziki at home | Authentic Greek Gyro Sauce Recipe": "تزاتزيكي في البيت | وصفة صوص الجيرو اليوناني الأصيل",

        // Navigation
        "Authentic Greek Kitchen": "مطبخ يوناني أصيل",
        "Overview": "نظرة عامة",
        "Video Masterclass": "شرح بالفيديو",
        "Secrets & Tips": "أسرار ونصائح",
        "Ingredients": "المكونات",
        "Step-by-Step": "الخطوات",
        "FAQ": "الأسئلة الشائعة",
        "Contact": "تواصل",
        "Start Cooking": "ابدأ الطبخ",

        // Hero
        "Authentic Street-Food Style Tzatziki": "تزاتزيكي أصيل بنكهة أكل الشارع",
        "Authentic Greek": "صوص يوناني أصيل",
        "Gyro House Sauce": "للجيرو على طريقة البيت",
        "Master the cool, garlic-infused, extra-creamy Greek cucumber sauce from scratch. Perfect for gyros, grilled meats, crisp veggies, and warm pita bread.": "أتقن تحضير صوص الخيار اليوناني البارد بنكهة الثوم وقوامه الكريمي من الصفر. مثالي مع الجيرو واللحوم المشوية والخضار المقرمشة وخبز البيتا الدافئ.",
        "Prep Time": "وقت التحضير",
        "15 Mins": "15 دقيقة",
        "Chill Time": "وقت التبريد",
        "1 Hour": "ساعة واحدة",
        "Skill Level": "المستوى",
        "Easy (A-Z)": "سهل (من الألف للياء)",
        "Yield": "الكمية",
        "Jump to Recipe": "اذهب إلى الوصفة",
        "Watch Tutorial": "شاهد الشرح",
        "\"The secret is in the cucumber drain!\" — Chef Nikos": "\"السر في تصفية الخيار!\" — الشيف نيكوس",

        // Video
        "Visual Masterclass": "ماستر كلاس مصوّر",
        "Watch How It's Made": "شاهد طريقة التحضير",
        "Follow along with this step-by-step video guide to learn proper cucumber squeezing techniques and ingredient ratios.": "تابع هذا الفيديو خطوة بخطوة لتتعلم طريقة عصر الخيار الصحيحة ونسب المكونات.",

        // Tips
        "The Greek Kitchen Rules": "قواعد المطبخ اليوناني",
        "4 Golden Secrets to Perfection": "4 أسرار ذهبية للتميّز",
        "Avoid common beginner mistakes like watery or bland sauce with these simple principles.": "تجنّب أخطاء المبتدئين الشائعة مثل الصوص المائي أو عديم الطعم بهذه المبادئ البسيطة.",
        "Thoroughly Drain the Cucumber": "اعصر الخيار جيدًا",
        "Cucumbers are over 95% water. Grate them, salt them, wait 10 minutes, then wring out every single drop using a cheesecloth or clean kitchen towel. Water is the #1 enemy of thick Tzatziki!": "الخيار أكثر من 95% ماء. ابشره وأضف الملح وانتظر 10 دقائق، ثم اعصر كل نقطة ماء باستخدام قطعة شاش أو فوطة مطبخ نظيفة. الماء هو العدو الأول للتزاتزيكي الكثيف!",
        "Use Authentic Full-Fat Yogurt": "استخدم زبادي كامل الدسم",
        "Always opt for full-fat (10% or 5%) strained Greek yogurt. If using standard yogurt, let it drain through a coffee filter overnight to achieve the signature creamy consistency.": "اختر دائمًا الزبادي اليوناني المصفّى كامل الدسم (10% أو 5%). وإذا استخدمت زبادي عاديًا، صفّه عبر فلتر قهوة طوال الليل للحصول على القوام الكريمي المميز.",
        "Finely Grated Fresh Garlic": "ثوم طازج مبشور ناعمًا",
        "Never use garlic powder! Microplane or finely grate fresh garlic cloves so they blend smoothly into the yogurt without harsh crunchy bits.": "لا تستخدم مسحوق الثوم أبدًا! ابشر فصوص الثوم الطازجة ناعمًا لتذوب في الزبادي بسلاسة دون قطع خشنة.",
        "Chilling is Essential": "التبريد ضروري",
        "Freshly mixed Tzatziki can taste sharp. Let it rest in the refrigerator for at least 1 hour before serving to let the garlic, dill, and lemon mellow into harmony.": "قد يكون طعم التزاتزيكي الطازج حادًا. اتركه في الثلاجة ساعة على الأقل قبل التقديم لتتناغم نكهات الثوم والشبت والليمون.",

        // Ingredients
        "Mise En Place": "تجهيز المكونات",
        "Ingredients Checklist": "قائمة المكونات",
        "Check off items as you gather them in your kitchen.": "علّم على كل مكوّن بعد تجهيزه في مطبخك.",
        "Batch Size:": "حجم الكمية:",
        "Plain Strained Greek Yogurt (Full Fat 5%+)": "زبادي يوناني سادة مصفّى (كامل الدسم 5%+)",
        "English Cucumber (Grated & Thoroughly Squeezed)": "خيار إنجليزي (مبشور ومعصور جيدًا)",
        "Extra Virgin Olive Oil": "زيت زيتون بكر ممتاز",
        "Fresh Garlic (Microplaned or Minced)": "ثوم طازج (مبشور ناعمًا أو مفروم)",
        "Fresh Dill or Mint (Finely Chopped)": "شبت أو نعناع طازج (مفروم ناعمًا)",
        "Fresh Lemon Juice": "عصير ليمون طازج",
        "Red Wine Vinegar": "خل النبيذ الأحمر",
        "Fine Sea Salt (Half for draining, half to taste)": "ملح بحري ناعم (نصفه للتصفية ونصفه للتتبيل)",
        "Freshly Ground Black Pepper": "فلفل أسود مطحون طازجًا",
        "cups": "أكواب",
        "large cucumber": "خيارة كبيرة",
        "tbsp": "ملعقة كبيرة",
        "tsp": "ملعقة صغيرة",
        "cloves": "فصوص",

        // Steps
        "A to Z Workflow": "من الألف إلى الياء",
        "Step-by-Step Instructions": "خطوات التحضير",
        "Progress": "التقدم",
        "1. Grate the Cucumber": "1. ابشر الخيار",
        "Prep Work": "تحضير",
        "Wash 1 large English cucumber thoroughly. You can keep the skin on for extra color and vitamins or peel it if preferred. Using the large holes of a box grater, grate the cucumber into a bowl.": "اغسل خيارة إنجليزية كبيرة جيدًا. يمكنك ترك القشرة للون وفيتامينات أكثر أو تقشيرها حسب رغبتك. باستخدام الفتحات الكبيرة في المبشرة، ابشر الخيار في وعاء.",
        "2. Salt & Squeeze (The Secret Step)": "2. الملح والعصر (الخطوة السرية)",
        "Crucial Step": "خطوة أساسية",
        "Toss the grated cucumber with ½ teaspoon of sea salt. Let it rest for 10 minutes to draw out moisture. Afterwards, transfer the cucumber to a clean kitchen towel or cheesecloth and wring out as much liquid as physically possible over the sink!": "قلّب الخيار المبشور مع ½ ملعقة صغيرة من الملح البحري. اتركه 10 دقائق ليخرج الماء. بعد ذلك انقله إلى فوطة مطبخ نظيفة أو قطعة شاش واعصره فوق الحوض لآخر نقطة ممكنة!",
        "Salt Draining Timer": "مؤقت تصفية الملح",
        "Start 10 Min Timer": "ابدأ مؤقت 10 دقائق",
        "Pause Timer": "إيقاف مؤقت",
        "Resume Timer": "استئناف المؤقت",
        "Time's Up!": "انتهى الوقت!",
        "Reset": "إعادة ضبط",
        "3. Prep Herbs, Garlic & Acid": "3. جهّز الأعشاب والثوم والحامض",
        "Flavor Base": "أساس النكهة",
        "Finely mince or grate 3-4 fresh garlic cloves using a microplane. Finely chop 2 tablespoons of fresh dill (or fresh mint). Squeeze 1 tablespoon of fresh lemon juice and measure out 1 teaspoon of red wine vinegar.": "افرم أو ابشر 3-4 فصوص ثوم طازج ناعمًا. قطّع ملعقتين كبيرتين من الشبت الطازج (أو النعناع الطازج) ناعمًا. اعصر ملعقة كبيرة من عصير الليمون الطازج وقِس ملعقة صغيرة من خل النبيذ الأحمر.",
        "4. Whisk & Combine": "4. اخفق وامزج",
        "Assembly": "التجميع",
        "In a medium mixing bowl, add 2 cups of thick Greek yogurt, squeezed cucumber, garlic, herbs, lemon juice, red wine vinegar, and 2 tablespoons of extra virgin olive oil. Whisk briskly until completely incorporated and silky smooth. Taste and season with extra salt or black pepper as needed.": "في وعاء خلط متوسط، ضع كوبين من الزبادي اليوناني الكثيف والخيار المعصور والثوم والأعشاب وعصير الليمون وخل النبيذ الأحمر وملعقتين كبيرتين من زيت الزيتون البكر الممتاز. اخفق بقوة حتى يتجانس المزيج تمامًا ويصبح ناعمًا كالحرير. تذوّق وأضف المزيد من الملح أو الفلفل الأسود عند الحاجة.",
        "5. Chill & Garnish": "5. برّد وزيّن",
        "Final Touch": "اللمسة الأخيرة",
        "Cover the bowl tightly with plastic wrap and chill in the refrigerator for at least 60 minutes. Before serving, drizzle with a swirl of high-quality Extra Virgin Olive Oil and a sprig of fresh dill. Serve cold!": "غطِّ الوعاء بإحكام بغلاف بلاستيكي وبرّده في الثلاجة 60 دقيقة على الأقل. قبل التقديم، رشّ القليل من زيت الزيتون البكر الممتاز عالي الجودة وزيّنه بفرع شبت طازج. يُقدَّم باردًا!",

        // Storage & nutrition
        "How to Store": "طريقة التخزين",
        "Refrigerator:": "الثلاجة:",
        "Store in an airtight container for up to 4 to 5 days.": "احفظه في علبة محكمة الغلق حتى 4 إلى 5 أيام.",
        "Freezing:": "التجميد:",
        "Do NOT freeze! Dairy and cucumber separate and become grainy upon thawing.": "لا تجمّده! الألبان والخيار ينفصلان ويصبح القوام حُبيبيًا عند الإذابة.",
        "Refresh Tip:": "نصيحة للتجديد:",
        "Stir briefly before re-serving if a little olive oil separates on top.": "قلّبه سريعًا قبل التقديم مرة أخرى إذا انفصل القليل من زيت الزيتون على السطح.",
        "Estimated Nutrition": "القيمة الغذائية التقديرية",
        "Per 1/4 cup serving (Based on 8 total servings)": "لكل حصة ربع كوب (بناءً على 8 حصص إجمالًا)",
        "Calories": "السعرات",
        "Protein": "البروتين",
        "Healthy Fat": "دهون صحية",
        "Carbs": "الكربوهيدرات",

        // FAQ
        "Got Questions?": "هل لديك أسئلة؟",
        "Troubleshooting & FAQ": "حل المشكلات والأسئلة الشائعة",
        "Everything you need to know for classic Greek gyro perfection.": "كل ما تحتاج معرفته للحصول على جيرو يوناني كلاسيكي مثالي.",
        "Why did my Tzatziki turn out watery?": "لماذا أصبح التزاتزيكي مائيًا؟",
        "Watery sauce is almost always caused by insufficiently squeezed cucumber or using thin, non-strained yogurt. Be sure to use a cheesecloth or kitchen towel to wring out the cucumber forcefully after salting!": "يحدث الصوص المائي غالبًا بسبب عدم عصر الخيار جيدًا أو استخدام زبادي خفيف غير مصفّى. احرص على استخدام قطعة شاش أو فوطة مطبخ لعصر الخيار بقوة بعد تمليحه!",
        "Can I use low-fat or non-fat yogurt?": "هل يمكنني استخدام زبادي قليل الدسم أو خالٍ من الدسم؟",
        "You can, but authentic restaurant style gyro house sauce relies on full-fat Greek yogurt (typically 5% or 10%) for its lush texture and to balance the garlic's punch. If using 0% fat yogurt, add an extra tablespoon of Extra Virgin Olive Oil.": "يمكنك ذلك، لكن صوص الجيرو الأصيل بطريقة المطاعم يعتمد على الزبادي اليوناني كامل الدسم (عادةً 5% أو 10%) لقوامه الغني ولموازنة حدّة الثوم. وإذا استخدمت زبادي 0% دسم، أضف ملعقة كبيرة إضافية من زيت الزيتون البكر الممتاز.",
        "Fresh Dill vs. Fresh Mint: Which is authentic?": "الشبت الطازج أم النعناع الطازج: أيهما الأصيل؟",
        "Both are authentic depending on the region of Greece! Northern Greek recipes heavily favor fresh dill, while southern regions and islands often add fresh mint. You can even use a combination of both for a lively profile.": "كلاهما أصيل بحسب المنطقة في اليونان! الوصفات في شمال اليونان تفضّل الشبت الطازج بشدة، بينما يضيف الجنوب والجزر النعناع الطازج غالبًا. ويمكنك الجمع بينهما لنكهة منعشة.",
        "What else pairs great with this sauce besides Gyros?": "ما الذي يتناسب مع هذا الصوص غير الجيرو؟",
        "Tzatziki is incredibly versatile! It pairs amazingly with grilled chicken souvlaki, lamb chops, falafel, roasted potatoes, grilled zucchini, or simply as a dip for warm pita chips and fresh vegetables.": "التزاتزيكي متعدد الاستخدامات! يتناسب بشكل رائع مع سوفلاكي الدجاج المشوي وريش الضأن والفلافل والبطاطس المحمّرة والكوسة المشوية، أو كغموس لرقائق البيتا الدافئة والخضار الطازجة.",
        "Can I make this sauce ahead of time?": "هل يمكن تحضير هذا الصوص مسبقًا؟",
        "Absolutely! It actually tastes better after resting overnight in the fridge, as the garlic and herbs have more time to blend with the yogurt. Just stir before serving.": "بالتأكيد! بل يصبح مذاقه أفضل بعد تركه طوال الليل في الثلاجة، إذ يكون للثوم والأعشاب وقت أطول لتمتزج بالزبادي. قلّبه فقط قبل التقديم.",

        // Contact
        "Get In Touch": "ابقَ على تواصل",
        "Contact Me": "تواصل معي",
        "Have a question, a suggestion, or your own twist on this recipe? Send me an email and I'll get back to you.": "هل لديك سؤال أو اقتراح أو لمستك الخاصة على هذه الوصفة؟ أرسل لي رسالة بريد إلكتروني وسأرد عليك.",
        "Send Me an Email": "أرسل لي رسالة",

        // Footer
        "Bringing authentic, time-tested Greek household recipes right into your home kitchen.": "نقدّم لك وصفات يونانية منزلية أصيلة ومجرّبة إلى مطبخ بيتك."
    };

    const PATTERNS = [
        [/^(\d+) of (\d+) Done$/,              m => `${m[1]} من ${m[2]} تم`],
        [/^([\d.]+)x \((\d+) cups\)$/,         m => `${m[1]}x (${m[2]} أكواب)`],
        [/^(\d+)-(\d+) Servings$/,             m => `${m[1]}-${m[2]} حصص`],
        [/^(\d+) kcal$/,                       m => `${m[1]} سعرة`],
        [/^([\d.]+) g$/,                       m => `${m[1]} جم`],
        [/^([\d./ ]+?) ([A-Za-z][A-Za-z ]*)$/, m => AR[m[2]] ? `${m[1]} ${AR[m[2]]}` : null],
        [/^(©\s*\d{4}\s+.+?\.)\s*Kali Orexi \(Bon Appétit\)!$/, m => `${m[1]} بالهناء والشفاء!`]
    ];

    const originals = new WeakMap();   
    const englishTitle = document.title;
    let lang = 'en';

    function translate(text) {
        const key = text.replace(/\s+/g, ' ');

        if (AR[key]) return AR[key];

        for (const [pattern, build] of PATTERNS) {
            const match = key.match(pattern);
            const result = match && build(match);

            if (result) return result;
        }

        return null;
    }

    function shouldSkip(node) {
        const parent = node.parentElement;

        return !parent || parent.closest('script, style, noscript, [data-no-i18n]');
    }

    function toArabic(node) {
        if (originals.has(node) || shouldSkip(node)) return;

        const parts = node.data.match(/^(\s*)([\s\S]*?)(\s*)$/);

        if (!parts[2]) return;

        const arabic = translate(parts[2]);

        if (!arabic) return;

        originals.set(node, node.data);
        node.data = parts[1] + arabic + parts[3];
    }

    function toEnglish(node) {
        if (!originals.has(node)) return;

        node.data = originals.get(node);
        originals.delete(node);
    }

    function walk(root, callback) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];

        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(callback);
    }

    function setLang(next) {
        lang = next;

        const isArabic = next === 'ar';

        document.documentElement.lang = next;
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

        walk(document.body, isArabic ? toArabic : toEnglish);

        document.title = isArabic ? (translate(englishTitle) || englishTitle) : englishTitle;

        const button = document.getElementById('langToggle');

        if (button) button.textContent = isArabic ? 'EN' : 'عربي';

        try {
            localStorage.setItem('lang', next);
        } catch (e) {}
    }

    /* Translate content that script.js renders later
       (ingredients, timer, progress, batch size...) */
    new MutationObserver(mutations => {
        if (lang !== 'ar') return;

        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(added => {
                if (added.nodeType === Node.TEXT_NODE) toArabic(added);
                else if (added.nodeType === Node.ELEMENT_NODE) walk(added, toArabic);
            });
        });
    }).observe(document.body, { childList: true, subtree: true });

    /* Debug helper: type i18nMissing() in the browser console */
    window.i18nMissing = function () {
        const missing = [];

        walk(document.body, node => {
            const text = node.data.replace(/\s+/g, ' ').trim();

            if (!shouldSkip(node) && !originals.has(node) && /[A-Za-z]{2,}/.test(text)) {
                missing.push(text);
            }
        });

        console.log(missing.length ? missing : 'Everything is translated');

        return missing;
    };

    document.getElementById('langToggle')
        ?.addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));

    let saved = null;

    try {
        saved = localStorage.getItem('lang');
    } catch (e) {}

    if (!saved) {
        saved = (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
    }

    if (saved === 'ar') setLang('ar');
})();