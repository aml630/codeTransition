
describe('Ticket', function() {
  it("Display Ticket Object Inputs", function () {
    var testTicket = new Ticket(20, 55, 9);
    expect(testTicket.time).to.equal(20);
    expect(testTicket.age).to.equal(55);
    expect(testTicket.matinee).to.equal(9);
  });


  it("should charge more for new movies", function(){
    var testTicket = new Ticket(20, 55, 9);    expect(testTicket.newMovie()).to.equal(true);
  });

  it("should charge less for old movies", function(){
    var testTicket = new Ticket(2, 55, 9);    expect(testTicket.newMovie()).to.equal(false);
  });

  it("should discount for old people", function(){
    var testTicket = new Ticket(20, 55, 9);    expect(testTicket.senior()).to.equal(true);

  });

  it("should discount for matinee times", function() {
    var testTicket = new Ticket(20, 55, 9);    expect(testTicket.isMatinee()).to.equal(true);
  });
});
