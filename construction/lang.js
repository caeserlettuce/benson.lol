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
        "f2": "designed in Ålesund, Norway.",
        "finn-top": "GET YOUR OWN BENSON HERE!",
        "finn-mid": "get a benson",
        "finn-bot": "benson.lol is not affiliated with<br>finntheduck.com"
    },
    "no": {
        "t1": "Benson min elskede",
        "bmb1": "benson min elskede",
        "bmb2": "et utvalg bilder av alles favorittfugl, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designet i Ålesund, Norge.",
        "finn-top": "FÅ DIN EGEN BENSON HER!",
        "finn-mid": "få en benson",
        "finn-bot": "benson.lol er ikke tilknyttet<br>finntheduck.com"
    },
    "fr": {
        "t1": "Benson mon bien-aimé",
        "bmb1": "benson mon bien-aimé",
        "bmb2": "un assortiment de photos du canard préféré de tous, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "conçu à Ålesund, en Norvège.",
        "finn-top": "OBTENEZ VOTRE PROPRE BENSON ICI !",
        "finn-mid": "obtenir un benson",
        "finn-bot": "benson.lol n'est pas affilié à<br>finntheduck.com"
    },
    "it": {
        "t1": "Benson mio amato",
        "bmb1": "benson mio amato",
        "bmb2": "un assortimento di foto della papera preferita da tutti, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "progettato ad Ålesund, Norvegia.",
        "finn-top": "PRENDI IL TUO BENSON QUI!",
        "finn-mid": "prendi un benson",
        "finn-bot": "benson.lol non è affiliato con<br>finntheduck.com"
    },
    "sp": {
        "t1": "Benson mi amado",
        "bmb1": "benson mi amado",
        "bmb2": "¡una variedad de fotos del pato favorito de todos, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "diseñado en Ålesund, Noruega.",
        "finn-top": "PRENDI IL TUO BENSON QUI!",
        "finn-mid": "prendi un benson",
        "finn-bot": "benson.lol non è affiliato con<br>finntheduck.com"
    },
    "de": {
        "t1": "Benson Mein Geliebter",
        "bmb1": "benson mein geliebter",
        "bmb2": "eine auswahl an fotos von jedermanns lieblingsente, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "entworfen in Ålesund, Norwegen.",
        "finn-top": "HOL DIR HIER DEINEN EIGENEN BENSON!",
        "finn-mid": "nimm einen Benson",
        "finn-bot": "benson.lol ist nicht mit finntheduck.com<br>verbunden"
    },
    "jp": {
        "t1": "ベンソン私の最愛の人",
        "bmb1": "私の最愛のベンソン",
        "bmb2": "みんなのお気に入りのアヒル、ベンソンの写真の品揃え！",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "ノルウェーのオーレスンで設計されました。",
        "finn-top": "ここであなた自身のベンソンを手に入れよう！",
        "finn-mid": "ベンソンを取得",
        "finn-bot": "benson.lolはfinntheduck.comと提携していません"
    },
}

function len(json) {
    var finale = 0;
    for (i in json) {
        finale += 1;
    }
    return finale
}

var lod = true;

function do_lang(language) {
    console.log(language);
    if (lang_txt[language] && lang_vis[language]) { // if it exists
        lang = language;
        localStorage.setItem("lang", lang);
        for (i in lang_txt[language]) {
            document.getElementById(`${i}`).innerHTML = `${lang_txt[language][i]}`;
        }
        set_img(generate_html(cur_json));
        document.getElementById("selected-lang").innerHTML = `<span class="sel-lang"><img src="${lang_vis[language]["flag"]}" class="lang-flag"> ${lang_vis[language]["name"]}</span>`;
        make_lang_list();


        // finn badge

        //document.getElementById("finn-transition").innerHTML = ".finn-badge { transition: 0s; }";
        
        //                                                                                                              -891px
        //document.getElementById("finn-size").innerHTML = `.finn-badge { width: 5000px; /*default width: 450px */ right: 0px; /*default amount: -340px */ }`;
        document.getElementById("ft-s").innerHTML = lang_txt[lang]["finn-top"];
        document.getElementById("fm-s").innerHTML = lang_txt[lang]["finn-mid"];
        document.getElementById("fb-s").innerHTML = lang_txt[lang]["finn-bot"];
        var ft = document.getElementById("ft-s").clientWidth + 10;
        var fm = document.getElementById("fm-s").clientWidth + 20;
        var fb = document.getElementById("fb-s").clientWidth + 10;
        console.log(`${ft}, ${fm}, ${fb}`);
        var wid = 0;
        if (ft > wid) {
            wid = ft;
        }
        if (fm > wid) {
            wid = fm;
        }
        if (fb > wid) {
            wid = fb;
        }
        console.log("finn badge text width: ", wid);
        var final_wid = wid + 114;
        if (lod == true) {
            final_wid = wid + 114;
            lod = false;
        }
        console.log("finn badge width: ", final_wid);
        var finn_css = `.finn-badge { width: ${final_wid}px; /*default width: 450px */ right: -${final_wid - 109}px; /*default amount: -340px */ }`;
        document.getElementById("finn-size").innerHTML = finn_css;
        console.log(finn_css);

        var footer_height = document.getElementById("footer").clientHeight;

        document.getElementById("technopug-pos").innerHTML = `.technopug { bottom: ${footer_height}px; }`;


        //document.getElementById("finn-transition").innerHTML = ".finn-badge { transition: 1.5s; }";
    } else {
        console.error(`language '${language}' does not exist!!!!!`);
    }
}
// making the language list

function make_lang_list() {
    var the_list = document.getElementById("lang-list");
    the_list.innerHTML = '';

    for (i in lang_vis) {
        //console.debug(i);
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
