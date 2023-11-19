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
var sort = true;

localStorage.setItem("pw", windowWidth);
localStorage.setItem("ph", windowHeight);

function reverse_array(array) {
    var arr_len = array.length - 1;
    var out_arr = new Array();
    for (i in array) {
        out_arr.push(array[arr_len - i]);
    }
    return out_arr
}

// display types:

// ascending/descending for all of these

// order added
// date photos were taken
// alphabetical order of description
// alphabetical order of location


if (windowWidth < windowHeight) {
    // MOBILE!!!
    var node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    node.setAttribute("href", `mobile.css`);
    document.head.appendChild(node);
}




function generate_html(json) {
    try {
        var f_html = "";

        for (i in json) {
            var cj = json[i];

            var bogo = `${cj["img"]}`;

            bogo = bogo.replace("../img/", "");
            bogo = bogo.replace(".png", "");


            var c_html = `
<div class="blocky">
    <a href="view?bogo=${bogo}">
        <img src="${cj["img"]}" class="imagetm disable" loading="lazy">
    </a>
    <br>
    <span class="blocky-text">
        <span>${cj["location"][lang]}</span>
        <span style="color: #e9e9e9;">-</span>
        <span>${cj["date"]}</span>
    </span>
    <br><br>
    <span class="blocky-text">${cj["text"][lang]}</span>
    <br>
    <span style="font-size: 0px;">[benson.lol] bogos binted</span>
</div>`;
            f_html += c_html;

        }

        return f_html
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
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

function chunky(array, size) {
    try {
        var out = new Array();
        for (let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size);
            console.log(chunk);
            out.push(chunk);
            // do whatever
        }
        return out
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}


//clr_img();

// get the row width of elements

var gottem = false;


var he = document.getElementById("photos-div");


var height_tm = 0;


var all_jsom = new Object();
var raw_jsom = new Object();

function load_jsontm(jsom) {
    try {
        raw_jsom = [...jsom];
        if (sort == true) {
            all_jsom = reverse_array(jsom);
        } else {
            all_jsom = [...jsom];
        }
        document.getElementById("results").innerHTML = all_jsom.length
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}

load_jsontm(img_db)
setTimeout( () => {
    apd_img(generate_html(all_jsom));
}, 100);


var scroll_height = 0;

var body = document.body
var html = document.documentElement;



// load_next() will load the next row of images

var scroll_buffer = 100;

$(window).scroll(function() {   

    try {
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
                    

                    if ($(document).height() - ($(window).scrollTop() + $(window).height()) < scroll_buffer) {
                        load_next();
                    }
                }, 4000);
            }


        }
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
});