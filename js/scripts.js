// Business Logic



// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();


    $("form").hide();
    $(".printList").show();


  var groceries = ["g1","g2","g3","g4","g5","g6","g7","g8","g9","g10"];
  // console.log(groceries);

  groceries.forEach(function(grocery){
    var list = $("input#" + grocery).val();
    $("ol").append("<li>" + list.toUpperCase() + "</li>");
  });
  });
});
