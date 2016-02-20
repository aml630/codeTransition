



function Ticket(movie, age, matinee) {
  this.movie = movie;
  this.age = age;
  this.matinee = matinee;
};

Ticket.prototype.newMovie = function() {
  if (this.movie >= 10) {
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

Ticket.prototype.price = function() {
  var start = 10
  if (this.newMovie() === true) {
    start = start - 5
  } else {
    start = start + 5
  }

  if (this.senior() === true) {
    start = start - 8
  }

  if (this.isMatinee() === true) {
    start = start -3
  }
  return start
};

$(document).ready(function() {
$("form").submit(function (event) {
  var months = $("#movieInput").val();
  var age = $("#ageInput").val();
  var time = $("#timeInput").val();
  var finalTicket = new Ticket(months, age, time)
  var finalPrice = finalTicket.price()
  $(".btn-info").text(finalTicket.price())
  console.log(finalPrice)
  event.preventDefault()
})

$(".question").click(function () {
  $(this).next(".answer").slideToggle("slow");
});

});
