console.debug("loading benson.JS");
var scrolltm = 0;
var benson = document.getElementById("benson");
var finn = document.getElementById("finn");
var technopug = document.getElementById("technopug");
var map_elem = document.getElementById("map");
var main_elem = document.getElementById("main-tm");
var benson_rot = 0;
var benson_top = 0;
benson.addEventListener('contextmenu', event => event.preventDefault());    // disabling right click
benson.onmousedown = function() { return false; };
finn.onmousedown = function() { return false; };
technopug.onmousedown = function() { return false; };
var popa;
// nft websites cant even figure it out when it took me a simple google search
function obama() {
    // whenever scroll
    console.log("he");
    var last = scrolltm * 1;
    scrolltm = window.scrollY;
    benson.style.transform = `rotateZ(${scrolltm / 6}deg)`;
    clearTimeout(popa);
}
function cheese() {
    // whenever resize

    benson_top = benson.style.top;
    console.log(benson_top);

    //var mainh = main_elem.clientHeight;
    //var ha = main_elem.getBoundingClientRect();

    //console.log(ha);

    //var from_top = (ha.bottom * 0.75) + ha.top;

    //map_elem.style.top = `${from_top}px`;
    

    /*
    bottom: 240
    height: 128
    left: 0
    right: 1920
    top: 112
    width: 1920
    x: 0
    y: 112
    
    1920*128
    
    */
    var lang_wid = document.getElementById("langsel").clientWidth;
    document.getElementById("mode-sel").style.right = `${lang_wid + 10}px`;

}
cheese();
window.onscroll = obama;
window.onresize = cheese;
console.debug("benson.JS loaded.");