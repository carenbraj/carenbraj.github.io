$(document).ready(function(){
  $("#button").click(function() {
    for (var bottles = 99; bottles >= 1; bottles--) {
      if (bottles ==1){
      $("#song").append("<li>" + bottles + " bottle of beer on the wall " + bottles + " bottle of beer. You take one you pass it around. " + (bottles -1) + " bottles of beer on the wall</li>");
      }
      else{
        $("#song").append("<li>" + bottles + " bottles of beer on the wall " + bottles + " bottles of beer. You take one you pass it around. " + (bottles -1) + " bottles of beer on the wall</li>");
      }
}

});
});
