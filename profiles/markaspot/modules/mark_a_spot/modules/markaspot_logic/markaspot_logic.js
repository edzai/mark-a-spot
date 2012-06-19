/**
 * @file
 * Javascript for transforming geolocation address field.
 */


jQuery(document).ready(function(){
	$ = jQuery;
  Drupal.maslogic = Drupal.maslogic || {};
  Drupal.maslogic.applyAddress = function (address) {

    var street_number = ""; 
    var country = "";

    $.each(address, function(i,comp){
      if(comp.types[0] == "country"){
        country = (comp.short_name) ? comp.short_name : "EN";
      } 
      switch (comp.types[0]) {
        case "street_number":
          street_number = comp.long_name;
        break;
        case "route":
          route = comp.long_name;
        break;
        case "postal_code":
          postal_code = comp.long_name;
          $('#edit-field-zip-und-0-value').val(postal_code);
        break;
        case "postal_code_prefix":
          postal_code_prefix = comp.long_name;
          $('#edit-field-zip-und-0-value').val(postal_code_prefix +" "+postal_code);
        break;
        case "locality":
          locality = comp.long_name;
          $('#edit-field-city-und-0-value').val(locality);
        break;
      }
    });
    // If you have a different pattern for your address code, put it here
    address = (country == "DE") ? route + " " + street_number : street_number + " " + route;
    $('#edit-field-address-und-0-value').val(address);     
	};
});