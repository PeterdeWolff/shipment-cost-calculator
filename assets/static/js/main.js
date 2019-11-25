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

var lenght();
var width ();
var height();

function volume_weight (lenght,width,height) {return ((lenght*width*height)/5000)};

var weight = ('lenght' * 'width' * 'height');

