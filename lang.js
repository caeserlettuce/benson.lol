var lang = "en";



var ls_lang = localStorage.getItem("lang");

if (ls_lang) {
    // language does exist
    lang = ls_lang
} else {
    localStorage.setItem("lang", "en");
}
// localstorage stuff complete


var lang_vis = {    // for language selector
    "en": {
        "name": "EN",
        "flag": "flag/en.png"
    },
    "no": {
        "name": "NO",
        "flag": "flag/no.png"
    }
}

var lang_txt = {    // key is the element's id, value is its innerHTML
    "en": {
        "bmb1": "benson my beloved",
        "bmb2": "an assortment of photos of everyone's favourite duck, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designed in Ålesund, Norway."
    },
    "no": {
        "bmb1": "benson min elskede",
        "bmb2": "et utvalg bilder av alles favorittand, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designet i Ålesund, Norge."
    }
}

function do_lang(language) {
    if (lang_txt[language] && lang_vis[language]) { // if it exists
        lang = language;
        localStorage.setItem("lang", lang);
        for (i in lang_txt[language]) {
            document.getElementById(`${i}`).innerHTML = `${lang_txt[language][i]}`;
        }
        document.getElementById("selected-lang").innerHTML = `<span class="sel-lang"><img src="${lang_vis[language]["flag"]}" class="lang-flag"> ${lang_vis[language]["name"]}</span>`
    } else {
        console.error(`language '${language}' does not exist!!!!!`);
    }
}


do_lang(lang);