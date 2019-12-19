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

var dimension;
var calculatedWeight;

function calculate(){
    
   var lenght = parseInt($("#lenght").val());
    var width = parseInt($("#width").val());
    var height = parseInt($("#height").val());
    var weight = Math.ceil(parseInt($("#weight").val()));
    var country = $("#countries-dropdown").val();
    var volume_weight = Math.ceil((lenght * width * height) /5000);
        
      
        if (volume_weight > weight) {
            calcDimension(lenght, width, height);
            calcWeight(volume_weight, country);
         
        
        } else {
            calcDimension(lenght, width, height);
           calcWeight(weight, country)
            
        }
}

function clearAll () {
    $("#lenght").val("");
    $("#width").val("");
    $("#height").val("");
    $("#weight").val("");
    $("#countries-dropdown").val("Choose your country");
    $('#shipping_costs').val("");
    
}


function calcDimension (l,w,h) {
    if (l > w && l > h){dimension = 2*w + 2*h + l;
    }
    else if (l < w && l > h) {dimension = 2*l + 2*h + w;
    }
    else if (w > l && l < h) {dimension = 2*l +2*w + h;
    }
    
    if (dimension > 400){
        alert("dimension is too big");
    return
    }
}

function calcWeight (w, c) {
    if (w <= 10) {
        calculatedWeight = w;
    } 
    else if (w > 10 && w <= 50) {
        calculatedWeight = 2*(Math.round(w) /2);
    }
    else if (w > 50 && w <= 70) {
        calculatedWeight = 5*(Math.round(w) /5);
    } else {
       alert("Weight is over 70kg");
       return
    }
    
    
          var d = costData[calculatedWeight];
          var cost = d[c];
          $('#shipping_costs').val(cost);
    
}



//if (volume_weight > weight) {weight = volume weight};







