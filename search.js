
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
    try {    
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
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}


function sc_tog_loca() {
    try {
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
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}

function sc_tog_time() {
    try {
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
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}

function pardat(dat) {
    var dee = dat.split(".");
    return `${dee[1]}/${dee[0]}/${dee[2]}`;
}

function pardat2(dat) {
    var dee = dat.split("-");
    return `${dee[1]}/${dee[2]}/${dee[0]}`;
}

function run_search() {
    try {
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

        var he_two = new Array();
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

            console.log(scv.tim)
        }



        // thank you random stackoverflow user for this
        function dateCheck(from,to,check) {

            var fDate,lDate,cDate;
            fDate = Date.parse(from);
            lDate = Date.parse(to);
            cDate = Date.parse(check);
        
            if((cDate <= lDate && cDate >= fDate)) {
                return true;
            }
            return false;
        }


        function hahadate(db, num) {

            // time

            
            var dec = db[num]["date"];
            
            var chk = dateCheck(pardat2(scv.dtf), pardat2(scv.dtt), pardat(dec));
        
            console.log(chk);

            if (chk == true) {
                he_two.push(db[num]);
            }
            

            
        }

        if (scv.tim == true) {
            if (he_one.length == 0) {
                for (i in img_db) {
                    hahadate(img_db, i);
                }
            } else {
                for (i in he_one) {
                    hahadate(he_one, i);
                }
            }
        }
        
        console.log(he_one);

        if (scv.tim == true) {
            load_jsontm(he_two);
        } else {
            load_jsontm(he_one);
        }
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
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }

}

function reload_db() {

    try {
        load_jsontm(img_db);
            
        set_img(generate_html(split_json[0]));
        cur_json = [...split_json[0]];
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}

function sort_db() {

    try {

        sort = !sort;

        if (sort == true) {
            document.getElementById("sortsvg").style.transform = "rotate(0deg)";
        } else {
            document.getElementById("sortsvg").style.transform = "rotate(180deg)";
        }

        load_jsontm(raw_jsom);

        set_img(generate_html(split_json[0]));
        cur_json = [...split_json[0]];
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}