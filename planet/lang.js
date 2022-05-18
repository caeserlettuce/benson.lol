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
        "t1": "Planet Benson"
    },
    "no": {
        "t1": "Planeten Benson"
    },
    "fr": {
        "t1": "Planète Benson"
    },
    "it": {
        "t1": "Pianeta Benson"
    },
    "sp": {
        "t1": "planeta benson"
    },
    "de": {
        "t1": "Planet Benson"
    },
    "jp": {
        "t1": "プラネットベンソン" // ベンソン
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
