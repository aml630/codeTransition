describe('Contact', function() {
  it("creates a new contact with the given properties.", function(){
  var testContact = new Contact ("Mike","Lor","235 SE.Street Portland, OR");
  expect(testContact.firstName).to.equal("Mike");
  expect(testContact.lastName).to.equal("Lor");
  expect(testContact.address).to.equal('235 SE.Street Portland, OR');
  });
