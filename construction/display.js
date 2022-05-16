var cur_json = new Array();
var split_json = new Array();
var load_index = 0;
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var prev_w = localStorage.getItem("pw");
var prev_h = localStorage.getItem("ph");
var max_tm = 0;
var load_amount = 10;
var query_more = true;

localStorage.setItem("pw", windowWidth);
localStorage.setItem("ph", windowHeight);

var hv_txt = {
    "lc": {
        "en": "location",
        "no": "plassering",
        "fr": "emplacement",
        "it": "posizione",
        "sp": "localización",
        "de": "lage",
        "jp": "位置"
    },
    "dt": {
        "en": "date taken",
        "no": "dato tatt",
        "fr": "date prise",
        "it": "data presa",
        "sp": "fecha que se tendrá",
        "de": "aufnahmedatum",
        "jp": "取得されたデータ"
    }
}

function generate_html(json) {
    var f_html = "";

    for (i in json) {
        var cj = json[i];


        var c_html = `<span class="blocky"> <img src="${cj["img"]}" class="imagetm disable"> <br> <span class="blocky-text"> <span class="tt">${cj["location"][lang]}<span class="tth">${hv_txt["lc"][lang]}</span></span> <span style="color: #e9e9e9;">-</span> <span class="tt">${cj["date"]}<span class="tth">${hv_txt["dt"][lang]}</span></span> </span> <br><br> <span class="blocky-text">${cj["text"][lang]}</span> <br><span style="font-size: 0px;">[benson.lol] bogos binted</span> </span>`;
        f_html += c_html;

    }

    return f_html
}

function set_img(html) {
    document.getElementById("photos-div").innerHTML = `${html}`;
}

function apd_img(html) {
    document.getElementById("photos-div").innerHTML += `${html}`;
}

function clr_img() {
    document.getElementById("photos-div").innerHTML = ``;
}

function load_next() {
    load_index += 1;
    apd_img(generate_html(split_json[load_index]));
    //cur_json = [cur_json, split_json[load_index]];
    for (i in split_json[load_index]) {
        cur_json.push(split_json[load_index][i]);
    }
    //cur_json.push([...split_json[load_index]]);
}

function chunky(array, size) {
    var out = new Array();
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        console.log(chunk);
        out.push(chunk);
        // do whatever
    }
    return out
}


//clr_img();

// get the row width of elements

var gottem = false;


var he = document.getElementById("photos-div");


var height_tm = 0;
for (let i = 0; i < 50; i++) {
    
    he.innerHTML += `<span class="blocky"> <img src="img/colour_test.png" class="imagetm"> <br> <span class="blocky-text"> <span class="tt">location<span class="tth">location</span></span> <span style="color: #e9e9e9;">-</span> <span class="tt">da.te.hehe<span class="tth">date taken</span></span> </span> <br><br> <span class="blocky-text">description</span> <br><span style="font-size: 0px;">[benson.lol] bogos binted</span> </span>`;

    var cur_height = he.clientHeight;

    //console.log(i);
    if (i == 0) {
        height_tm = he.clientHeight;
        //console.log("he", height_tm);
    }

    if (cur_height > height_tm || i == 50) {
        gottem = true;
        max_tm = i;
        clr_img();
        break
    }
}

if (max_tm * 4 > 100) {
    load_amount = 100;
} else {
    load_amount = max_tm * 4;
}
//load_amount = 1;

split_json = chunky(img_db, load_amount);


// load_amount is the amount of photos itll load at a time

apd_img(generate_html(split_json[0]));
cur_json = [...split_json[0]];
var scroll_height = 0;

var body = document.body
var html = document.documentElement;



// load_next() will load the next row of images

var scroll_buffer = 100;

$(window).scroll(function() {   

    var scroll_top = $(window).scrollTop();
    var window_height = $(window).height();
    var document_height = $(document).height();

    console.log(`scrolltop: ${scroll_top}\nwindow height: ${window_height}\ndocument height: ${document_height}\nscroll + window: ${scroll_top + window_height}\npoop: ${document_height - (scroll_top + window_height)}`);
    if(document_height - (scroll_top + window_height) < scroll_buffer) {
        console.debug("a!!!!!!!!");
        if (query_more == true) {
            query_more = false;
            load_next();
            setTimeout(() => {
                query_more = true;
                console.log("ab");
            }, 4000);
        }


    }
});