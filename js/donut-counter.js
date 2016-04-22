$(function(){ 
  var donutCounter = new DonutCounter();
});

function DonutCounter(){
  this.guests = parseInt($( "span.guest-count" ).text());
  this.count = parseInt($( "span.donut-count" ).text());
  this.setClickers(); // make sure all the code runs!
};

DonutCounter.prototype.setClickers = function(){
  this.addDonutClicker();
  this.subtractDonutClicker();
  this.addGuestClicker();
  this.subtractGuestClicker();
  this.checker();
};

DonutCounter.prototype.addDonutClicker = function(){
  var j = this;
  $( "div#donuts button.add" ).click(function(){
    $( "span.donut-count" ).html(j.addDonut());
  });
};

DonutCounter.prototype.subtractDonutClicker = function(){
  var j = this;
  $( "div#donuts button.remove" ).click(function(){
    $( "span.donut-count" ).html(j.subtractDonut());
  });
};

DonutCounter.prototype.addDonut = function(){
  this.count += 1;
  return this.count;
};

DonutCounter.prototype.subtractDonut = function(){
  if (this.count > 0) {
    this.count -= 1;    
  }
  return this.count;
};

DonutCounter.prototype.addGuestClicker = function(){
  var j = this;
  $( "div#guests button.add" ).click(function(){
    $( "span.guest-count" ).html(j.addGuest());
  });
};

DonutCounter.prototype.subtractGuestClicker = function(){
  var j = this;
  $( "div#guests button.remove" ).click(function(){
    $( "span.guest-count" ).html(j.subtractGuest());
  });
};

DonutCounter.prototype.addGuest = function(){
  this.guests += 1;
  return this.guests;
};

DonutCounter.prototype.subtractGuest = function(){
  if (this.guests > 0) {
    this.guests -= 1;
  }
  return this.guests;
};

DonutCounter.prototype.checker = function(){
  var j = this;
  $( "div#check button" ).click(function(){
    $("h2#status").html(j.check());
  });
};

DonutCounter.prototype.check = function(){
  var guests = this.guests;
  var donuts = this.count;
  if (donuts < guests) {
    this.status = "Guests are sad :(";
  } else if ( guests === 0 ) {
    this.status = "Invite someone you jerk!";
  } else if ( donuts >= guests * 5 ) {
    this.status = "ARE YOU TRYING TO KILL US ALL!?";
  } else if ( guests <= donuts ) {
    this.status = "Guests are having a blast!";
  } 

    return this.status;
};