function Ticket(movie, time, age) {
  this.movies = movie;
  this.time = time;
  this.age = age;
}

var movieName = {"hotelT":15, "incredibles":15, "spyDumped":15};
var timeOfDay = {"matinee":-5, "afternoon":0, "evening":0};
var patronAge = {"minor":-5, "adult":0, "senior":-5};

Ticket.prototype.amount = function(){
  return movieName[this.movies] + timeOfDay[this.time] + patronAge[this.age];
};

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var movies = $("input:radio[name=movie]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var age = $("input:radio[name=age]:checked").val();

    var newTicket = new Ticket(movies, time, age);

    $("#result").append("<span class='result'>" + newTicket.amount() + "</span>");

  });
});
