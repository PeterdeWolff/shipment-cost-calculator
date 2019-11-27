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

$( document ).ready(function() {

});

//on button click there must be a function that calculates all the props at once
// function(){ var length = $("#length).val(); for every var the same only dropdown is not val() but attr();
// calculate the volume_weight => var volume_weight = (length * width * height)/5000
// calculate weight => var weight = lenght * width * height and than something or else this is always higher?? 
// check if (volume_weight > weight) { check inside json for the volume_weight and code from the dropdown } else { check inside json for weight and code from dropdown}
// in both cases return the value and done!


var lenght();
var width ();
var height();

function volume_weight (lenght,width,height) {return ((lenght*width*height)/5000)};

var weight = ('lenght' * 'width' * 'height');

