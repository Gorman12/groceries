$(document).ready(function(){
  $("#grocery form").submit(function(event){
    var arrays = ["item1", "item2", "item3", "item4"];
    var newArray = [];
    arrays.forEach(function(array){
      var userInput = $("input#" + array).val();
      newArray.push(userInput);
    });
    newArray.sort();

    for(i=0; i<4; i+=1){
      $("." + arrays[i]).text(newArray[i]);
    };




    // newArray.forEach(function(array) {
    //   $("." + array).text();
    //
    // });
    $("#output").show();
    event.preventDefault();
  });
});
