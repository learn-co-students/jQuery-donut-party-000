

$(function(){ 
  var donutCounter = new DonutCounter();
});

// your code here

function DonutCounter() {

  $('#donuts .add').click(function(){
    var donutNum = $('.donut-count').text();
    var newDonut = parseInt(donutNum) + 1
    $('#donuts h3 span').text(newDonut)

  });

   $('#donuts .remove').click(function(){
    var donuts = $('.donut-count').text()
    var newDonut = donuts - 1
      if (newDonut < 0) {
        newDonut = 0
      } else
        newDonut
      $('#donuts h3 span').text(newDonut);
  });

  $('#guests .add').click(function(){
    var guestNum = $('.guest-count').text();
    var newCount = parseInt(guestNum) + 1
    $('#guests h3 span').text(newCount)
  });

  $('#guests .remove').click(function(){
    var guestNum = $('.guest-count').text();
    var newCount = guestNum - 1
      if (newCount < 0) {
        newCount = 0
      } else
        newCount
    $('#guests h3 span').text(newCount)
  });

  $('#check').click(function(){
    var gCount = $('.guest-count').text();
    var dCount = $('.donut-count').text();
    if (gCount > dCount && gCount != 0 && dCount < 5) {
      $('#status').text("Guests are sad :(")
    } else if (gCount == 0) {
      $('#status').text("Invite someone you jerk!")
    } else if (gCount <= dCount && dCount < 5) {
      $('#status').text("Guests are having a blast!")
    } else
      $('#status').text("ARE YOU TRYING TO KILL US ALL!?")


  });



};