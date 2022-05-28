// Initialize and add the map
var he = false;

var map;

function initMap() {
    // The location of Uluru
    var lmao = { lat: 50.448461, lng: -38.474407 };
    // The map, centered at Uluru
    if (he == false) {
        map = new google.maps.Map(document.getElementById("map"), {
            mapId: mapid,
            zoom: 4,
            center: lmao,
        });
        he = true;
    }
        

    // The marker, positioned at Uluru
    
    var markers = new Array();
    
    var new_marker;

    for (i in img_db) {


        var cords = img_db[i]["ltlo"];

        if (!cords[0]) {
            cords = [0, 0];
        }

        if (cords[0] == 0 || cords[1] == 0) {

            console.debug("literally nothing lmao");

        } else {


            if (Array.isArray(cords) == false) {

                if (pre_coords[cords]) {
                    cords = pre_coords[cords];
                }
            }



            eval(`marker_${i} = new google.maps.Marker({
                position: {"lat": ${cords[0]}, "lng": ${cords[1]}},
                map: map,
                title: "${img_db[i]["text"][lang]}"
            });`);
            
            console.log(i)

            eval(`marker_${i}.addListener("click", () => {
                location.href = "../view?bogo=${i}";
            });`);
                

            markers.push(new_marker);


            }
    } 
    
    /*
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    */
}




window.initMap = initMap;
