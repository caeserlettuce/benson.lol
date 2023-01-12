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


function generate_html(json) {
    try {
        var f_html = "";

        for (i in json) {
            var cj = json[i];

            var bogo = `${cj["img"]}`;

            bogo = bogo.replace("../img/", "");
            bogo = bogo.replace(".png", "");


            var c_html = `<span class="blocky"> <img src="${cj["img"]}" class="imagetm disable" onclick="location.href = 'https://benson.lol/view?bogo=${bogo}'"> <br> <span class="blocky-text"> <span class="tt">${cj["location"][lang]}<span class="tth">${hv_txt["lc"][lang]}</span></span> <span style="color: #e9e9e9;">-</span> <span class="tt">${cj["date"]}<span class="tth">${hv_txt["dt"][lang]}</span></span> </span> <br><br> <span class="blocky-text">${cj["text"][lang]}</span> <br><span style="font-size: 0px;">[benson.lol] bogos binted</span> </span>`;
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
