var lang_hei = document.getElementById("lang-txt-size").clientHeight;

var ls_lang = localStorage.getItem("lang");

if (ls_lang) {
    // language does exist
    lang = ls_lang
} else {
    localStorage.setItem("lang", "en");
}
// localstorage stuff complete



var lang_txt = {    // key is the element's id, value is its innerHTML
    "en": {
        "t1": "World of Benson",
        "bmb1": "benson all around the world",
        "bmb2": "where has benson been?",
        "finn-top": "GET YOUR OWN BENSON HERE!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designed in Ålesund, Norway.",
        "f3": "contact me on discord @pugface#2222, email: benson@benson.lol",
        "finn-mid": "get a benson",
        "finn-bot": "benson.lol is not affiliated with<br>finntheduck.com",
        "langdisc": ""
    },
    "no": {
        "t1": "Bensons verden",
        "bmb1": "benson over hele verden",
        "bmb2": "hvor har benson vært?",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designet i Ålesund, Norge.",
        "f3": "kontakt meg på discord @pugface#2222, e-post: benson@benson.lol",
        "finn-top": "FÅ DIN EGEN BENSON HER!",
        "finn-mid": "få en benson",
        "finn-bot": "benson.lol er ikke tilknyttet<br>finntheduck.com",
        "langdisc": "*oversettelser er kanskje ikke nøyaktige"
    },
    "fr": {
        "t1": "Le monde de Benson",
        "bmb1": "benson partout dans le monde",
        "bmb2": "Où est passé Benson ?",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "conçu à Ålesund, en Norvège.",
        "f3": "contactez-moi sur discord @pugface#2222, email: benson@benson.lol",
        "finn-top": "OBTENEZ VOTRE PROPRE BENSON ICI !",
        "finn-mid": "obtenir un benson",
        "finn-bot": "benson.lol n'est pas affilié à<br>finntheduck.com",
        "langdisc": "*La traduction peut ne pas être exacte"
    },
    "it": {
        "t1": "Il mondo di Benson",
        "bmb1": "benson in tutto il mondo",
        "bmb2": "dove è stato Benson?",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "progettato ad Ålesund, Norvegia.",
        "f3": "contattami su discord @pugface#2222, e-mail: benson@benson.lol",
        "finn-top": "PRENDI IL TUO BENSON QUI!",
        "finn-mid": "prendi un benson",
        "finn-bot": "benson.lol non è affiliato con<br>finntheduck.com",
        "langdisc": "*La traduzione potrebbe non essere accurata"
    },
    "sp": {
        "t1": "mundo de benson",
        "bmb1": "benson en todo el mundo",
        "bmb2": "¿Dónde ha estado Benson?",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "diseñado en Ålesund, Noruega.",
        "f3": "contáctame en discord @pugface#2222, correo electrónico: benson@benson.lol",
        "finn-top": "PRENDI IL TUO BENSON QUI!",
        "finn-mid": "prendi un benson",
        "finn-bot": "benson.lol non è affiliato con<br>finntheduck.com",
        "langdisc": "*La traducción puede no ser exacta."
    },
    "de": {
        "t1": "Welt von Benson",
        "bmb1": "Benson auf der ganzen Welt",
        "bmb2": "Wo war Benson?",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "entworfen in Ålesund, Norwegen.",
        "f3": "Kontaktieren Sie mich unter Discord @pugface#2222, E-Mail: benson@benson.lol",
        "finn-top": "HOL DIR HIER DEINEN EIGENEN BENSON!",
        "finn-mid": "nimm einen Benson",
        "finn-bot": "benson.lol ist nicht mit finntheduck.com<br>verbunden",
        "langdisc": "*Die Übersetzung ist möglicherweise nicht korrekt"
    },
    "jp": {
        "t1": "ベンソンの世界",
        "bmb1": "世界中のベンソン",
        "bmb2": "ベンソンはどこにいましたか？",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "ノルウェーのオーレスンで設計されました。",
        "f3": "不和で私に連絡してください@pugface＃2222、電子メール：benson@benson.lol",
        "finn-top": "ここであなた自身のベンソンを手に入れよう！",
        "finn-mid": "ベンソンを取得",
        "finn-bot": "benson.lolはfinntheduck.comと提携していません",
        "langdisc": "*翻訳は正確でない可能性があります"
    },
    "pi": {
        "t1": "Ye All Love Our Benson",
        "bmb1": "ye all love our benson",
        "bmb2": "many photographs of our duck, benson",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "hath been designed in Ålesund, Norway.",
        "f3": "write me a note in a bottle using discord @pugface#2222 or by electronic note: benson@benson.lol",
        "finn-top": "YE WANT BENSON!!",
        "finn-mid": "get benson",
        "finn-bot": "benson.lol is not affiliated with<br>finntheduck.com",
        "langdisc": "*ye translation is perrrrrfect"
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
            console.log(i)
            document.getElementById(`${i}`).innerHTML = `${lang_txt[language][i]}`;
        }
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

        initMap();

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
