console.debug("loading benson.JS");
var scrolltm = 0;
var benson = document.getElementById("benson");
var finn = document.getElementById("finn");
var technopug = document.getElementById("technopug");
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
}
cheese();
window.onscroll = obama;
window.onresize = cheese;
console.debug("benson.JS loaded.");