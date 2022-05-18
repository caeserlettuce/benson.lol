
// set up the linky thing
const queryString = window.location.search;
const urlParameters = new URLSearchParams(queryString);

var bogodiv = document.getElementById("photos-div");

var imgtm = urlParameters.get("bogo");

imgtm = parseInt(imgtm);

if (img_db[imgtm]) {
    // egg

    var cj = img_db[imgtm];

    var pee = `<span class="blocky"> <img src="${cj["img"]}" class="imagetm disable"> <br> <span class="blocky-text"> <span class="tt">${cj["location"][lang]}<span class="tth">${hv_txt["lc"][lang]}</span></span> <span style="color: #e9e9e9;">-</span> <span class="tt">${cj["date"]}<span class="tth">${hv_txt["dt"][lang]}</span></span> </span> <br><br> <span class="blocky-text">${cj["text"][lang]}</span> <br><span style="font-size: 0px;">[benson.lol] bogos binted</span> </span>`;

    bogodiv.innerHTML = pee;

} else {
    //alert("idiot")
    bogodiv.innerHTML = `<p class="big-bensontext" id="bmb1">photo not found</p>
    <p class="normal-bensontext" id="bmb2">the photo you are looking for does not exist!!</p>`;
    do_lang(lang);
}