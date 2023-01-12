// seasonal stuff

var today = new Date()
var month = today.getMonth();
var day = today.getDate();
var year = today.getFullYear();


if (month == 11) {  // december
    document.getElementById("benson").src = "../assets/christmas-benson.png";
    document.getElementById("seasonal-switch").innerHTML = `
    .cloud1 {
        background-image: url(../assets/snow_1.png);
    }
    .cloud2 {
        background-image: url(../assets/snow_2.png);
    }`
}