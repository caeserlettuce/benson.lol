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

            var urltm = `../image_processing/in/${cj}`;

            var idname = `${cj}`.replace(".", ".");
            var disname = `${cj}`.split(".")[0];

            var c_html = `<span class="blocky">
            <img src="${urltm}" class="imagetm">
            <br>
            <span class="blocky-text">
                <span>${disname}</span><br>
                <span>description: </span><input style="margin-top: 5px;" type="text" class="tt texinput" id="indesc-${idname}"><br>
                <span>location: </span><input style="margin-top: 5px;" type="text" class="tt texinput"    id="inloc-${idname}"><br>
                <span>coordinates: </span><input style="margin-top: 5px;" type="text" class="tt texinput" id="incoord-${idname}"><br>
                <span>date: </span><input style="margin-top: 5px;" type="date" class="tt texinput"        id="indate-${idname}"><br>

            </span>
            <br><br>
            <br><span style="font-size: 0px;">[benson.lol] bogos binted</span>

            
          </span>`
            
            //var c_html = `<span class="blocky"> <img src="${cj["img"]}" class="imagetm disable" onclick="location.href = 'https://benson.lol/view?bogo=${bogo}'"> <br> <span class="blocky-text"> <span class="tt">${cj["location"][lang]}<span class="tth">${hv_txt["lc"][lang]}</span></span> <span style="color: #e9e9e9;">-</span> <span class="tt">${cj["date"]}<span class="tth">${hv_txt["dt"][lang]}</span></span> </span> <br><br> <span class="blocky-text">${cj["text"][lang]}</span> <br><span style="font-size: 0px;">[benson.lol] bogos binted</span> </span>`;
            
            
            
            
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
        console.error(err)
    }
}



document.getElementById("photos-div").innerHTML = generate_html(dev_db)

function doublenum(num) {
    var out = `${num}`
    if (`${num}`.length == 1) {
        out == `0${num}`
    }
    return out
}


function compileJSON() {
    try {
        var final_json = []


        for (i in dev_db) {

            var file = dev_db[i];

            var desc = document.getElementById(`indesc-${file}`).value;
            var location = document.getElementById(`inloc-${file}`).value;
            var coordinates = `${`${document.getElementById(`incoord-${file}`).value}`.replaceAll(" ", "")}`.split(",");
            var date = `${document.getElementById(`indate-${file}`).value}`.split("-");

            date = `${date[2]}.${date[1]}.${date[0]}`

            console.log(desc)
            console.log(location)
            console.log(coordinates)
            console.log(date)


            if (coordinates.length == 1) {
                coordinates = [0, 0]
            }

            var new_file = `${file.split(".")[0]}.png`
            
            final_json.push({
                "img": `../img/${new_file}`,
                "date": `${date}`,
                "text": {
                    "en": `${desc}`
                },
                "location": {
                    "en": `${location}`
                },
                "ltlo": coordinates
            })



        }
    
    
    console.log(final_json)

    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
        console.error(err)
        
    }

}