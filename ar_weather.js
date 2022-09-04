let coordinates = {}

$(document).ready(function() {
    get_coordinates()
})

function get_coordinates(){
    let search_param = new URLSearchParams(window.location.search)
    if(search_param.has('source') && search_param.has('destination')){
        let source = search_param.get('source');
        let destination = search_param.get('destination');
        coordinates.source_lat = source.split(";")[0];
        coordinates.source_lon = source.split(";")[1];
        coordinates.destination_lat = destination.split(";")[0];
        coordinates.destination_lon = destination.split(";")[1];
    }
    else{ 
    alert("Please select coordinates.");
    window.history.back();
}
}