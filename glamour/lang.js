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
        "t1": "Benson Glamour Shots",
        "bmb1": "benson glamour shots",
        "bmb2": "these benson photos have been edited to make them look nicer,<br>the photos on the main site however are not edited.",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designed in Ålesund, Norway.",
        "f3": "contact me on discord @pugface#2222, email: benson@benson.lol",
        "finn-top": "GET YOUR OWN BENSON HERE!",
        "finn-mid": "get a benson",
        "finn-bot": "benson.lol is not affiliated with<br>finntheduck.com",
        "langdisc": "",
        "sc1": "search center",
        "sc2": "search descriptions",
        "sc3": "search locations",
        "sc4": "search specific time",
        "sc5": "from",
        "sc6": "to",
        "searchbutton": "search"
    },
    "no": {
        "t1": "Benson min elskede",
        "bmb1": "benson min elskede",
        "bmb2": "et utvalg bilder av alles favorittfugl, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "designet i Ålesund, Norge.",
        "f3": "kontakt meg på discord @pugface#2222, e-post: benson@benson.lol",
        "finn-top": "FÅ DIN EGEN BENSON HER!",
        "finn-mid": "få en benson",
        "finn-bot": "benson.lol er ikke tilknyttet<br>finntheduck.com",
        "langdisc": "*oversettelser er kanskje ikke nøyaktige",
        "sc1": "søkesenter",
        "sc2": "søkebeskrivelser",
        "sc3": "søke på steder",
        "sc4": "søk på et bestemt tidspunkt",
        "sc5": "fra",
        "sc6": "til",
        "searchbutton": "søk"
    },
    "fr": {
        "t1": "Benson mon bien-aimé",
        "bmb1": "benson mon bien-aimé",
        "bmb2": "un assortiment de photos du canard préféré de tous, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "conçu à Ålesund, en Norvège.",
        "f3": "contactez-moi sur discord @pugface#2222, email: benson@benson.lol",
        "finn-top": "OBTENEZ VOTRE PROPRE BENSON ICI !",
        "finn-mid": "obtenir un benson",
        "finn-bot": "benson.lol n'est pas affilié à<br>finntheduck.com",
        "langdisc": "*La traduction peut ne pas être exacte",
        "sc1": "centre de recherche",
        "sc2": "descriptions de recherche",
        "sc3": "emplacements de recherche",
        "sc4": "rechercher une heure précise",
        "sc5": "de",
        "sc6": "à",
        "searchbutton": "recherche"
    },
    "it": {
        "t1": "Benson mio amato",
        "bmb1": "benson mio amato",
        "bmb2": "un assortimento di foto della papera preferita da tutti, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "progettato ad Ålesund, Norvegia.",
        "f3": "contattami su discord @pugface#2222, e-mail: benson@benson.lol",
        "finn-top": "PRENDI IL TUO BENSON QUI!",
        "finn-mid": "prendi un benson",
        "finn-bot": "benson.lol non è affiliato con<br>finntheduck.com",
        "langdisc": "*La traduzione potrebbe non essere accurata",
        "sc1": "centro di ricerca",
        "sc2": "cerca le descrizioni",
        "sc3": "ricerca posizioni",
        "sc4": "cerca un'ora specifica",
        "sc5": "da",
        "sc6": "a",
        "searchbutton": "ricerca"
    },
    "sp": {
        "t1": "Benson mi amado",
        "bmb1": "benson mi amado",
        "bmb2": "¡una variedad de fotos del pato favorito de todos, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "diseñado en Ålesund, Noruega.",
        "f3": "contáctame en discord @pugface#2222, correo electrónico: benson@benson.lol",
        "finn-top": "PRENDI IL TUO BENSON QUI!",
        "finn-mid": "prendi un benson",
        "finn-bot": "benson.lol non è affiliato con<br>finntheduck.com",
        "langdisc": "*La traducción puede no ser exacta.",
        "sc1": "centro de busqueda",
        "sc2": "buscar descripciones",
        "sc3": "buscar ubicaciones",
        "sc4": "buscar tiempo especifico",
        "sc5": "de",
        "sc6": "a",
        "searchbutton": "busqueda"
    },
    "de": {
        "t1": "Benson Mein Geliebter",
        "bmb1": "benson mein geliebter",
        "bmb2": "eine auswahl an fotos von jedermanns lieblingsente, benson!",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "entworfen in Ålesund, Norwegen.",
        "f3": "Kontaktieren Sie mich unter Discord @pugface#2222, E-Mail: benson@benson.lol",
        "finn-top": "HOL DIR HIER DEINEN EIGENEN BENSON!",
        "finn-mid": "nimm einen Benson",
        "finn-bot": "benson.lol ist nicht mit finntheduck.com<br>verbunden",
        "langdisc": "*Die Übersetzung ist möglicherweise nicht korrekt",
        "sc1": "Suchzentrum",
        "sc2": "Suchbeschreibungen",
        "sc3": "Suchorte",
        "sc4": "bestimmte Zeit suchen",
        "sc5": "aus",
        "sc6": "zu",
        "searchbutton": "Suche"
    },
    "jp": {
        "t1": "ベンソン私の最愛の人",
        "bmb1": "私の最愛のベンソン",
        "bmb2": "みんなのお気に入りのアヒル、ベンソンの写真の品揃え！",
        "f1": "©2022 benson.lol & dapug.lol",
        "f2": "ノルウェーのオーレスンで設計されました。",
        "f3": "不和で私に連絡してください@pugface＃2222、電子メール：benson@benson.lol",
        "finn-top": "ここであなた自身のベンソンを手に入れよう！",
        "finn-mid": "ベンソンを取得",
        "finn-bot": "benson.lolはfinntheduck.comと提携していません",
        "langdisc": "*翻訳は正確でない可能性があります",
        "sc1": "検索センター",
        "sc2": "検索の説明",
        "sc3": "検索場所",
        "sc4": "特定の時間を検索する",
        "sc5": "から",
        "sc6": "に",
        "searchbutton": "探す"
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
        "langdisc": "*ye translation is perrrrrfect",
        "sc1": "me map o' searchin'",
        "sc2": "search ye writings",
        "sc3": "search ye red x's",
        "sc4": "search ye times",
        "sc5": "from",
        "sc6": "to",
        "searchbutton": "find it"
    },
}

var bnsn_map = {
    "en": "where has benson been?",
    "no": "hvor har benson vært?",
    "fr": "Où est passé Benson ?",
    "it": "dov'è stato Benson?",
    "sp": "¿Dónde ha estado Benson?",
    "de": "Wo war Benson?",
    "jp": "ベンソンはどこにいましたか？",
    "pi": "where within the seven seas has benson gone?"
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
    try {
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
            var fb = document.getElementById("fb-s").clientWidth + 20;
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

            document.getElementById("trifold").title = `${bnsn_map[lang]}`;


            //document.getElementById("finn-transition").innerHTML = ".finn-badge { transition: 1.5s; }";
        } else {
            console.error(`language '${language}' does not exist!!!!!`);
        }

        
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}
// making the language list

function make_lang_list() {
    try {
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
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }    
}


do_lang(lang); // set the current lang that is saved in localStorage
make_lang_list();
