
$(document).ready(function() {

$("#countForm").submit(function(event){
  event.preventDefault();

  var maxNumber = parseInt($("input#number1").val());
  var countBy = parseInt($("input#number2").val());

  $("p").text("");


  for (var i = countBy; i <= maxNumber; i+= countBy){
    if(i <= maxNumber - countBy) {
      $("p").append(i + ", ")}
    else {
      $("p").append(i)
  };
};

});
});
