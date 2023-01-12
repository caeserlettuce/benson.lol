function clear_photos() {
    // clear photos
    window.location = "/clear_photos"
}

function remove_photo(bogo) {
    document.getElementById(bogo).remove();
    fetch("/remove_photo", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({"photo": bogo, "extension": extensions[bogo]})
    }).catch(err => {
        console.error("[POST] API down!")
    });
    var index = image_list.indexOf(`${bogo}.${extensions[bogo]}`);
    image_list.splice(index, 1);
}

function copyclip(text) {
    navigator.clipboard.writeText(text);
}

var image_list = [];
var image_folder = "";
var extensions = {};
var funny_json = {};
var funny_loop;
var processed_json = {};
var server_message = "";

fetch('/status')
    .then(function (response) {
        return response.json();
    }).then(function (text) {
        
        //put stoof here
        console.log(text)

        if (text["images"].length > 0) {
            var f_html = "";
            image_list = text["images"];
            image_folder = text["folder"];

            for (i in text["images"]) {
                var cj = text["images"][i];

                var bogo = cj.split(".")[0];
                extensions[bogo] = cj.split(".")[1];

                var c_html = `
<span class="blocky" id="${bogo}">
<img src="${text["folder"]}/${cj}" class="imagetm disable">
<br>
<input type="text" value="${bogo}" id="${bogo}_filename" spellcheck="false">
<span class="blocky-text">.png</span>
<br>
<span class="blocky-text">description: </span>
<input type="text" value="" id="${bogo}_desc" class="spacey" spellcheck="false">
<br>
<span class="blocky-text">location: </span>
<input type="text" value="" id="${bogo}_location" class="spacey" spellcheck="false">
<br>
<span class="blocky-text">date: </span>
<input type="date" id="${bogo}_date" class="spacey schemedark">
<br>
<span class="blocky-text">geolocation: </span>
<input type="text" value="" id="${bogo}_geolocation" class="spacey wee" spellcheck="false">
<br>
<span class="blocky-text spacey note">leave geolocation blank to use embedded location, or type in 0,0 to make it not have any geolocation</span>
<br>
<button class="wee" onclick="remove_photo('${bogo}')">remove</button>
<span style="font-size: 0px;">[benson.lol] bogos binted</span>
</span>`;
                f_html += c_html;

            }

            document.getElementById("photos-div").innerHTML = f_html;
        }

    }).catch((error) => {
        console.error("[GET] API down!");
    });





function send_json() {

    for (i in image_list) {
        var bogo = image_list[i].split(".")[0];

        console.log(`image: ${bogo}`);

        od = document.getElementById(`${bogo}_date`).value
        ods = od.split("-")
        funny_date = `${ods[2]}.${ods[1]}.${ods[0]}`;

        console.log(funny_date);
        funny_json[image_list[i]] = {
            "name": document.getElementById(`${bogo}_filename`).value,
            "description": document.getElementById(`${bogo}_desc`).value,
            "location": document.getElementById(`${bogo}_location`).value,
            "date": funny_date,
            "geo": document.getElementById(`${bogo}_geolocation`).value
        }

        console.log(funny_json[image_list[i]]);
    }

    fetch("/post_json", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(funny_json)
    }).catch(err => {
        console.error("[POST] API down!")
    });

}


funny_loop = setInterval( () => {
    fetch('/get_processed')
        .then(function (response) {
            return response.json();
        }).then(function (text) {
          
            //put stoof here
            //console.log(text);


            if (processed_json != text) {
                processed_json = text;
                document.getElementById("codetm").innerHTML = hljs.highlightAuto( JSON.stringify(processed_json, null, 2) ).value;
                
            }


        }).catch((error) => {
            console.error("[GET] API down!");
        });

    fetch('/server_message')
    .then(function (response) {
        return response.json();
    }).then(function (text) {
        
        //put stoof here
        //console.log(text);

        server_message = text["message"];
        document.getElementById("server-message").innerHTML = server_message;


    }).catch((error) => {
        console.error("[GET] API down!");
    });

        
}, 100);

function copy_json() {
    var stringytm = JSON.stringify(processed_json, null, 2)
    stringytm = stringytm.slice(1)
    stringytm = stringytm.slice(0, -1)
    copyclip(stringytm)
}

/*
      fetch("/colour", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({"colour": colour})
      }).catch(err => {
        console.error("[POST] API down!")
      });

      fetch('/status')
        .then(function (response) {
          return response.json();
        }).then(function (text) {
          
          //put stoof here

        }).catch((error) => {
          console.error("[GET] API down!");
        });


      */