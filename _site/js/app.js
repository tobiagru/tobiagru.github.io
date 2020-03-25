(function(){
  'use strict';

  new WOW().init();
  
})();

$('#activate_ds').click(function(){

  console.log("This happening")
  if (this.active === "true"){
    $('.ds-project').hide();
    this.class = "btn btn-secondary btn-lg";
  } else {
    $('.ds-project').show();
    this.class = "btn btn-default btn-lg";
  }
});
$('#activate_pm').click(function(){
  if (this.active === "true"){
    $('.pm-project').hide();
    this.class = "btn btn-secondary btn-lg";
  } else {
    $('.pm-project').show();
    this.class = "btn btn-default btn-lg";
  }
});