var chakram = require('chakram'),
expect = chakram.expect;

var baseURL = 'https://dog.ceo/api';
var allBreeds = '/breeds/list/all';

describe("Test1 - list all breeds", function() {
    it("should check status 200", function () {
        var response = chakram.get(baseURL+allBreeds);
        expect(response).to.have.status(200);
        expect(response).not.to.have.header('non-existing-header');

        return chakram.wait();

    });
});

describe("Test2 - list all breeds", function () {
    it("should check status - success", function () {
      return chakram.get(baseURL+allBreeds).then(function(response){
          expect(response).to.have.json('status','success')
      })
    });
  });

  describe("Test3 - list all breeds", function () {
    it("should return object message.bulldog", function () {
      return chakram.get(baseURL+allBreeds)
      .then(function(response){
          expect(response.body.message.bulldog).to.have.members(["boston","french"])
      })
    });
  });


  describe("Test4 - list all breeds", function () {
    it("should return object message.wolfhound", function () {
      return chakram.get(baseURL+allBreeds)
      .then(function(response){
          expect(response.body.message.wolfhound).to.have.members(["irish"])
      })
    });
  });