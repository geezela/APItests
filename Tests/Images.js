var chakram = require('chakram'),
expect = chakram.expect;

var baseURL = 'https://dog.ceo/api';
var allBreeds = '/breed/hound/images';

describe("Test1 - images", function() {
    it("should check header", function () {
        var response = chakram.get(baseURL+allBreeds);
        expect(response).to.have.status(200);
        expect(response).not.to.have.header('non-existing-header');

        return chakram.wait();

    });
});

describe("Test2 - images", function () {
    it("should check status - success", function () {
      return chakram.get(baseURL+allBreeds).then(function(response){
          expect(response).to.have.json('status','success')
      })
    });
  });
