console.debug("loading benson.JS");
var scrolltm = 0;
var benson = document.getElementById("benson");
var finn = document.getElementById("finn");
var imgtm_stoof = document.getElementById("imagetmstuff");
var benson_rot = 0;
var benson_top = 0;
var scape = "hehe";
benson.addEventListener('contextmenu', event => event.preventDefault());    // disabling right click
benson.onmousedown = function() { return false; };
finn.onmousedown = function() { return false; };
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

    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    if (windowWidth > windowHeight) {
        // landscape
        if (scape != "landscape") {
            console.log("landscape");
            imgtm_stoof.innerHTML = `.imagetm { width: calc(80vh - ( (1.5em * 2) + 48px) );  } .blocky {width: calc(85vh - ( (1.5em * 2) + 48px) );}`;
            scape = "landscape";
        }
    } else if (windowHeight > windowWidth) {
        //portrait
        if (scape != "portrait") {
            console.log("portrait");
            imgtm_stoof.innerHTML = `.imagetm { width: 80vw; } .blocky {width: 85vw ;}`;
            scape = "portrait";
        }
    }

    
    var lang_wid = document.getElementById("langsel").clientWidth;
    document.getElementById("mode-sel").style.right = `${lang_wid + 10}px`;

}
cheese();
window.onscroll = obama;
window.onresize = cheese;
console.debug("benson.JS loaded.");