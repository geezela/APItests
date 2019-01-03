var chakram = require('chakram');
expect = chakram.expect;

var baseURL = 'https://dog.ceo/api';
var allBreeds = '/breeds/image/random';
var response = null;

before(function () {
    return chakram.get(baseURL + allBreeds)
        .then(function (res) {
            response = res;
            return response;
        });
});


describe("Test1", function () {
    it("should check if image occurs", function () {
                                expect(response.body.message).to.be.a('string').and.satisfy(msg => msg.startsWith('https://images.dog.ceo/breeds/')); 
                                   return chakram.wait();
    });
});
