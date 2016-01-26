describe('Contact', function() {
  it("creates a new contact with the given properties.", function(){
  var testContact = new Contact ("Mike","Lor","235 SE.Street Portland, OR");
  expect(testContact.firstName).to.equal("Mike");
  expect(testContact.lastName).to.equal("Lor");
  expect(testContact.address).to.equal('235 SE.Street Portland, OR');
  });

  it("adds the fullName method to a contact", function(){
  var testContact = new Contact ("Erik","Tolentino", "3333");
  expect(testContact.fullName()).to.equal("Erik Tolentino 3333");
  });
});


describe('Address', function () {
  it('will combine all the address fields', function () {
    var testAddress = new Address("happyLane", "Portland", "OR");
    expect(testAddress.fullAddress()).to.equal("happyLane Portland OR")
  })
})
