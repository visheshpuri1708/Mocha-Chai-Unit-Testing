const expect = require('chai').expect;
let chai = require('chai');
let should = chai.should();
const axios = require('axios');

const { API_URL, createUser } = require("./test_utils");

const { before } = require("mocha");

let newuser = undefined;


before(async () => {
    newuser = await createUser();
})


describe("Get user Info", function () {

    it("Get All User Lists", async () => {
        const response = await axios.get(API_URL + "/getuserinfo");
        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("array");
    });



    it("Get Single User", async () => {
        const response = await axios.get(API_URL + "/singleuser/" + newuser._id);

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");
    });

    it("Should have all the property for each user", async () => {
        const response = await axios.get(API_URL + "/singleuser/" + newuser._id);

        expect(response.data.name).to.be.equal("Jessica");

        response.data.should.have.property("name");
        response.data.should.have.property("email");
        response.data.should.have.property("age");

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");

    })
});

// describe("Check two numbers", function () {


//it("Match two numbers", () => {
//    let first = 10;
//    let second = 10;
//    expect(first).to.be.equal(second);
//})

//it("Should have matching name", () => {
//    let first = 20;
//    let second = 90;
//    expect(first).not.to.be.equal(second);
//})

//it("Should have matching name", () => {
//    let name = "Vishesh";
//    expect(name).to.be.equal("Vishesh");
//})





// })