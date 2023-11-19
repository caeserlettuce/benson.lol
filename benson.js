console.debug("loading benson.JS");
var scrolltm = 0;
var benson = document.getElementById("benson");
var finn = document.getElementById("finn");
var technopug = document.getElementById("technopug");
var trifolg = document.getElementById("trifold");
var footer_tm = document.getElementById("footer");
var footer_wrap = document.getElementById("footer-wrap");
var benson_rot = 0;
var benson_top = 0;
var searchcenter = false;

var disable_dragging = [    // list of element IDs for elements that i dont want to be able to be dragged (like how you can drag an image from a page into a new tab)
    "benson",
    "finn",
    "technopug",
    "trifold",
    "mode-sel",
    "searchfung",
    "checky1",
]

var disable_rightclick = [  // same as previous but for disabling right click (nft websites, take notes)
    "benson",
    "finn",
    "technopug",
    "trifold",
    "mode-sel",
    "searchfung",
]

for (i in disable_dragging) {
    document.getElementById(disable_dragging[i]).onmousedown = function() { return false; };
}

for (i in disable_rightclick) {
    document.getElementById(disable_rightclick[i]).addEventListener('contextmenu', event => event.preventDefault());
}

var popa;
// nft websites cant even figure it out when it took me a simple google search
function obama() {
    try {
        // whenever scroll
        console.log("he");
        var last = scrolltm * 1;
        scrolltm = document.querySelector("#main").scrollTop;
        benson.style.transform = `rotateZ(${scrolltm / 6}deg)`;
        clearTimeout(popa);
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}
function cheese() {
    try {
        // whenever resize
        benson_top = benson.style.top;
        console.log(benson_top);
        var lang_wid = document.getElementById("langsel").clientWidth;
        document.getElementById("trifold").style.right = `${lang_wid + 10}px`;


        var footwap = footer_wrap.clientHeight;
        footer_tm.height = footwap;
        
        var footer_height = document.getElementById("footer").clientHeight;

        document.getElementById("technopug-pos").innerHTML = `.technopug { bottom: ${footer_height}px; }`;

        var lang_wid = document.getElementById("langsel").clientWidth;
        document.getElementById("trifold").style.right = `${lang_wid + 10}px`;
        var yayahaha = parseInt(`${document.getElementById("trifold").style.right}`.replace("px", ""))
        document.getElementById("mode-sel").style.right = `${yayahaha + document.getElementById("trifold").clientWidth}px`;
        document.getElementById("searchfung").style.right = `${yayahaha + document.getElementById("trifold").clientWidth + document.getElementById("mode-sel").clientWidth}px`;
    } catch (err) {
        push_notif({
            "title": "an error has occured!!",
            "desc": `an error "${err.message}" has occured!`,
            "icon": "../assets/error.png",
            "time": 4
        })
    }
}
function redir_map() {
    location.href = "./map";
}
function toggle_sc() {
    searchcenter = !searchcenter
    if (searchcenter == false) {
        document.getElementById("search-center").style.display = "none";
    } else {
        document.getElementById("search-center").style.display = "";
    }
}
cheese();
document.querySelector("#main").onscroll = obama;
window.onresize = cheese;
console.debug("benson.JS loaded.");