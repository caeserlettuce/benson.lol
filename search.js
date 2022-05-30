
var sc_desc = true;
var sc_loca = true;
var sc_time = true;

var sadnews = [{
    "img": "img/sadnews.png",
    "date": "today",
    "text": {
        "en": "no results found",
        "no": "Ingen resultater",
        "fr": "aucun résultat trouvé",
        "it": "nessun risultato trovato",
        "sp": "No se han encontrado resultados",
        "de": "keine Ergebnisse gefunden",
        "jp": "結果が見つかりません",
        "pi": "nothing hath been found"
    },
    "location": {
        "en": "your computer",
        "no": "din datamaskin",
        "fr": "ton ordinateur",
        "it": "il tuo computer",
        "sp": "tu computadora",
        "de": "dein Computer",
        "jp": "あなたのコンピュータ",
        "pi": "your electric box"
    },
    "ltlo": [0, 0]
}];


function sc_tog_desc() {
    var la = document.getElementById("checky1");
    var le = document.getElementById("checky1-bac");
    sc_desc = !sc_desc;

    if (sc_desc == true) {
        la.style.fill = "white";
        le.style.backgroundColor = "#4672ff";
    } else {
        la.style.fill = "none";
        le.style.backgroundColor = "grey";
    }
}


function sc_tog_loca() {
    var la = document.getElementById("checky2");
    var le = document.getElementById("checky2-bac");
    sc_loca = !sc_loca;

    if (sc_loca == true) {
        la.style.fill = "white";
        le.style.backgroundColor = "#4672ff";
    } else {
        la.style.fill = "none";
        le.style.backgroundColor = "grey";
    }
}

function sc_tog_time() {
    var la = document.getElementById("checky3");
    var le = document.getElementById("checky3-bac");
    sc_time = !sc_time;

    if (sc_time == true) {
        la.style.fill = "white";
        le.style.backgroundColor = "#4672ff";
    } else {
        la.style.fill = "none";
        le.style.backgroundColor = "grey";
    }
}

function run_search() {
    // oh god  the main search function my god this will be fun aaaa

    load_jsontm(img_db);

    console.log("querying search!!");

    var out_json = new Object();

    var scv = {
        "txt": document.getElementById("search-input").value,
        "dtf": document.getElementById("search-date-from").value,
        "dtt": document.getElementById("search-date-to").value,
        "des": sc_desc,
        "loc": sc_loca,
        "tim": sc_time
    }

    console.debug("parsing some stoof...");

    if (scv.txt == '') {
        scv.des = false;
        scv.loc = false;
    }

    if (scv.dtf == '' && scv.dtt != '') { // before date
        scv.dtf = "1970-01-01";
    } 
    if (scv.dtt == '' && scv.dtf != '') { // after date
        scv.dtt = "9999-12-31";
    }


    if (scv.dtf == '' && scv.dtt == '') {
        scv.tim = false;
    }
    
    console.log(scv);


    var he_one = new Array();
    for (i in img_db) {
        //desciption
        var done = false;
        if (scv.des == true) {
            var dec = img_db[i]["text"][lang];
            if (`${dec}`.toLowerCase().indexOf(`${scv.txt}`.toLowerCase() ) > -1) {
                he_one.push(img_db[i]);
            }
            done = true;
        }
        
        if (scv.loc == true) {
            var dec = img_db[i]["location"][lang];
            
            if (`${dec}`.toLowerCase().indexOf(`${scv.txt}`.toLowerCase() ) > -1) {
                he_one.push(img_db[i]);
            }
            done = true;
        }


    }

    console.log(he_one);


    load_jsontm(he_one);

/*
    if (scv.des == false && scv.loc == false && scv.tim == false) {

        load_jsontm(img_db)

    }

*/

    if (split_json.length == 0) {
        load_jsontm(sadnews);
        
        set_img(generate_html(split_json[0]));
        cur_json = [...split_json[0]];
    } else {

        set_img(generate_html(split_json[0]));
        cur_json = [...split_json[0]];
    }

}

function reload_db() {

    load_jsontm(img_db);
        
    set_img(generate_html(split_json[0]));
    cur_json = [...split_json[0]];
}