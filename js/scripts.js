
function Ticket(time, age, matinee) {
  this.time = time;
  this.age = age;
  this.matinee = matinee;
};


Ticket.prototype.newMovie = function() {
  if (this.time >= 10) {
    return true;
  } else {
    return false;
  }
};

Ticket.prototype.senior = function(){
  if (this.age >= 55) {
    return true;
  } else {
    return false;
  }
};

Ticket.prototype.isMatinee = function() {
  if (this.matinee < 12) {
    return true;
  } else {
    return false;
  }
};



$(document).ready(function() {


});
