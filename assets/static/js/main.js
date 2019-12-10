let dropdown = $('#countries-dropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose your country</option>');
dropdown.prop('selectedIndex', 0);

const url = 'assets/static/data/countries.json';

// Populate dropdown with the countries and zones
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.zone).text(entry.country));
    });
});
var costData = {};

$.getJSON("assets/static/data/csvjson.json", function (cost){
    costData = cost;
}, function(succes) {});

function calculate(){
    
   var lenght = parseInt($("#lenght").val());
    var width = parseInt($("#width").val());
    var height = parseInt($("#height").val());
    var weight = Math.ceil(parseInt($("#weight").val()));
    var country = $("#countries-dropdown").val();
    var urlString = 'assets/static/data/csvjson.json';
    var volume_weight = Math.ceil((lenght * width * height) /5000);

   
        
        if (volume_weight > weight) {
          console.log(costData);  
        
        } else {
            
        }
}





//if (volume_weight > weight) {weight = volume weight};







