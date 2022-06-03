// notifications??? woo!!

var test_notif = {
    "title": "benson loves you!!",
    "desc": "benson loves you",
    "icon": "../assets/icon.png",
    "time": 5
}

var notif_id = 0;

var timeys = new Object();



/*

<div class="notifbox" id="not_0" onmouseover="notif_stoptimer(this)" onmouseout="notif_starttimer(this)">
    <span id="not_0_tim" style="display: none;">3</span>
    <img src="../assets/icon.png" class="notifimg disable" CLEAR="left" ALIGN="top">
    <span class="notifwrap">
        <img src="../assets/x.svg" class="close-notif disable">
        <span class="notiftitle">title</span>
        <span class="notifdesc">uh oh desc waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
    </span>
</div>

*/

function push_notif(notifJSON) {
    var push_html = `<div class="notifbox" id="not_${notif_id}" onmouseover="notif_stoptimer(this)" onmouseout="notif_starttimer(this)">
    <span id="not_${notif_id}_tim" style="display: none;">${notifJSON["time"]}</span>
    <img src="${notifJSON["icon"]}" class="notifimg disable" CLEAR="left" ALIGN="top">
    <img src="../assets/x.svg" class="close-notif disable" onclick="remove_notif(this)" id="notx_${notif_id}">
    <span class="notifwrap">
        <span class="notiftitle">${notifJSON["title"]}</span>
        <span class="notifdesc">${notifJSON["desc"]}</span>
    </span>
    </div>`;
    var ß = document.getElementById("notifcenter");
    ß.innerHTML += push_html;
    var notid = `not_${notif_id}`;
    var time = notifJSON["time"] * 1000
    timeys[notid] = setTimeout( () => {
        document.getElementById(`${notid}`).remove();
    }, time);
    document.getElementById(`${notid}`).style.animation = `notif-leave ${time}ms linear infinite`;
    notif_id += 1;
}

function notif_starttimer(notif) {
    var the_id = notif.id;
    console.log(`starting timer for "${the_id}"`);
    var time = parseInt(document.getElementById(`${the_id}_tim`).innerHTML);
    console.log(`${the_id}_tim`);
    time = time * 1000;
    clearTimeout(timeys[the_id]);
    timeys[the_id] = setTimeout( () => {
        document.getElementById(`${the_id}`).remove();
    }, time);
    notif.style.animation = `notif-leave ${time}ms linear infinite`;
}

function notif_stoptimer(notif) {
    var the_id = notif.id;
    console.log(`sstopping timer for "${the_id}"`)
    clearTimeout(timeys[the_id]);
    notif.style.animation = "";
}

function remove_notif(noty) {
    var id_tm = noty.id;
    var id_new = id_tm.replace("x", "");
    console.log(id_new);
    document.getElementById(id_new).remove()
}