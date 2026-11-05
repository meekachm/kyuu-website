
/* LANGUAGE SWITCHER */

const languageButtons = document.querySelectorAll(".lang-button");

const translatableElements = document.querySelectorAll("[data-i18n]");


/* TRANSLATIONS */

const translations = {

    en: {

        "hero-role": "Director",

        "project-type": "Music Video · 2026",
        "project-producer": "Produced by Avatar Beats",
        "project-credits": "Directed, Filmed & Edited by Yutaro Kudo",

        "about-name": "YUTARO “KYUU” KUDO",
        "about-role": "Director / Filmmaker",

        "about-p1":
            "Born on November 16, 2003, and raised in Morioka, Iwate, Yutaro Kudo, also known as Kyuu, is an emerging director and filmmaker with a passion for film and visual storytelling.",

        "about-p2":
            "A graduate of Morioka University with a degree in English Literature, Kyuu is currently working as an apprentice in the film industry, gaining firsthand experience on professional productions and developing his understanding of the craft both on set and behind the scenes.",

        "about-p3":
            "Kyuu’s first directing project is a music video for a friend and rapper, bringing together his interests in film and music. Taking on multiple roles, he directed, filmed, and edited the project himself, gaining hands-on experience across the filmmaking process.",

        "about-p4":
            "Now relocating from Morioka to Tokyo, Kyuu is entering a new chapter in his career, seeking new experiences and collaborations as he continues to develop his craft and creative identity as a director.",

        "contact-text":
            "For collaborations, inquiries, and creative projects:"

    },


    ja: {

        "hero-role": "映像監督",

        "project-type": "ミュージックビデオ · 2026",
        "project-producer": "プロデュース：Avatar Beats",
        "project-credits": "監督・撮影・編集：工藤悠太郎",

        "about-name": "工藤悠太郎 / KYUU",
        "about-role": "映像監督 / フィルムメーカー",

        "about-p1":
            "2003年11月16日生まれ、岩手県盛岡市出身。工藤悠太郎（Kyuu）は、映画や映像表現への情熱を持ち、映像監督・フィルムメーカーとして活動を始めている。",

        "about-p2":
            "盛岡大学で英文学を専攻し卒業。現在は映像業界で見習いとして働きながら、プロの制作現場で実践的な経験を積み、撮影現場の内外で映像制作への理解を深めている。",

        "about-p3":
            "初監督作品は、友人であるラッパーのミュージックビデオ。映画と音楽への関心を融合させた作品で、監督・撮影・編集を自ら手がけ、映像制作のさまざまな工程を経験している。",

        "about-p4":
            "現在は盛岡から東京へ拠点を移し、新たな経験やコラボレーションを通して、映像監督としての技術と自身のクリエイティブな表現を磨いている。",

        "contact-text":
            "コラボレーション、ご依頼、制作に関するお問い合わせはこちら："

    }

};


/* CHANGE LANGUAGE */

function changeLanguage(language) {

    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        return;
    }

    translatableElements.forEach((element) => {

        const key = element.dataset.i18n;

        if (Object.prototype.hasOwnProperty.call(selectedTranslations, key)) {
            element.textContent = selectedTranslations[key];
        }

    });

    document.documentElement.lang = language;

    languageButtons.forEach((button) => {

        const isActive = button.dataset.lang === language;

        button.classList.toggle("active", isActive);

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });

}


/* LANGUAGE BUTTON EVENTS */

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedLanguage = button.dataset.lang;

        changeLanguage(selectedLanguage);

    });

});


/* DEFAULT LANGUAGE */

changeLanguage("en");
