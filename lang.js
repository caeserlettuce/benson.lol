var lang_hei = document.getElementById("lang-txt-size").clientHeight;

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
    },
    "fr": {
        "name": "FR",
        "flag": "flag/fr.png"
    },
    "it": {
        "name": "IT",
        "flag": "flag/it.png"
    },
    "sp": {
        "name": "SP",
        "flag": "flag/sp.png"
    },
    "de": {
        "name": "DE",
        "flag": "flag/de.png"
    },
    "jp": {
        "name": "JP",
        "flag": "flag/jp.png"
    },
}

var lang_txt = {    // key is the element's id, value is its innerHTML
    "en": {
        "t1": "Benson My Beloved",
        "bmb1": "benson my beloved",
        "bmb2": "an assortment of photos of everyone's favourite duck, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designed in Ålesund, Norway."
    },
    "no": {
        "t1": "Benson min elskede",
        "bmb1": "benson min elskede",
        "bmb2": "et utvalg bilder av alles favorittfugl, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designet i Ålesund, Norge."
    },
    "fr": {
        "t1": "Benson mon bien-aimé",
        "bmb1": "benson mon bien-aimé",
        "bmb2": "un assortiment de photos du canard préféré de tous, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "conçu à Ålesund, en Norvège."
    },
    "it": {
        "t1": "Benson mio amato",
        "bmb1": "benson mio amato",
        "bmb2": "un assortimento di foto della papera preferita da tutti, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "progettato ad Ålesund, Norvegia."
    },
    "sp": {
        "t1": "Benson mi amado",
        "bmb1": "benson mi amado",
        "bmb2": "¡una variedad de fotos del pato favorito de todos, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "diseñado en Ålesund, Noruega."
    },
    "de": {
        "t1": "Benson Mein Geliebter",
        "bmb1": "benson mein geliebter",
        "bmb2": "eine auswahl an fotos von jedermanns lieblingsente, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "entworfen in Ålesund, Norwegen."
    },
    "jp": {
        "t1": "ベンソン私の最愛の人",
        "bmb1": "私の最愛のベンソン",
        "bmb2": "みんなのお気に入りのアヒル、ベンソンの写真の品揃え！",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "ノルウェーのオーレスンで設計されました。"
    },
}

function len(json) {
    var finale = 0;
    for (i in json) {
        finale += 1;
    }
    return finale
}

function do_lang(language) {
    console.log(language);
    if (lang_txt[language] && lang_vis[language]) { // if it exists
        lang = language;
        localStorage.setItem("lang", lang);
        for (i in lang_txt[language]) {
            document.getElementById(`${i}`).innerHTML = `${lang_txt[language][i]}`;
        }
        set_img(generate_html(cur_json));
        document.getElementById("selected-lang").innerHTML = `<span class="sel-lang"><img src="${lang_vis[language]["flag"]}" class="lang-flag"> ${lang_vis[language]["name"]}</span>`
        make_lang_list();
    } else {
        console.error(`language '${language}' does not exist!!!!!`);
    }
}
// making the language list

function make_lang_list() {
    var the_list = document.getElementById("lang-list");
    the_list.innerHTML = '';

    for (i in lang_vis) {
        console.debug(i);
        if (i != lang) {
            var new_elem = document.createElement('li');
    
            new_elem.innerHTML = `<span class="sel-lang"><img src="${lang_vis[i]["flag"]}" class="lang-flag"> ${lang_vis[i]["name"]}</span>`;
    
            eval(`new_elem.addEventListener('click', function(){ do_lang('${i}'); });`);
    
            the_list.appendChild(new_elem);

        }
    }

    

    var ll_height = lang_hei * (len(lang_vis) - 0.66);

    console.debug(`height: ${ll_height}`);

    var new_css = `#touch:checked + .slide {height: ${ll_height}px;}`;
    document.getElementById("lang-heightness").innerHTML = new_css;
    
}


do_lang(lang); // set the current lang that is saved in localStorage
make_lang_list();
