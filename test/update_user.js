const expect = require('chai').expect;
let chai = require('chai');
let should = chai.should();
const axios = require('axios');
const { API_URL, createUser } = require("./test_utils");
const { before } = require("mocha");
const { response } = require('express');

let newuser = undefined;

before(async () => {
    newuser = await createUser();
})

describe("Update User Information", function () {

    it("Update Single User All the Information Together", async () => {


        const payload = {
            name: "Jon Doe to new user Becham",
            email: "doe@gmail.com",
            age: 21
        };

        const response = await axios.put(API_URL + "/updateuser/" + newuser._id, payload);

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");

    });

    it("Update Single User Name", async () => {


        const payload = {
            name: "Jon Doe to new user Michael",

        };

        const response = await axios.put(API_URL + "/updateuser/" + newuser._id, payload);

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");

    });

    it("Update Single User email", async () => {


        const payload = {
            email: "doe@gmail.com",
        };

        const response = await axios.put(API_URL + "/updateuser/" + newuser._id, payload);

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");

    });

    it("Update Single User Age", async () => {


        const payload = {
            age: 21
        };

        const response = await axios.put(API_URL + "/updateuser/" + newuser._id, payload);

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");

    });

    it("Update Single User With wrong User ID", async () => {

        try {
            const payload = {
                name: "Jon Doe to new user Jesica",
                email: "doe@gmail.com",
                age: 21
            };
            const response = await axios.put(API_URL + "/updateuser/" + 8989899, payload);
            expect(response.status).not.to.be.equal(200);
            expect(response.data).to.be.an("object");

        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(200);
            } else {
                throw error;
            }
        }
    });

    it("Update Single User Information With New E-mail", async () => {
        const payload = {
            email: "jondoe@gmail.com"
        };

        const response = await axios.put(API_URL + "/updateuser/" + newuser._id, payload);

        expect(response.status).to.be.equal(200);

        expect(response.data.email).not.to.be.equal(payload);

        expect(response.data).to.be.an("object");
    });

    it("Update Single User Information With New Age", async () => {
        const payload = {
            age: 20
        };

        const response = await axios.put(API_URL + "/updateuser/" + newuser._id, payload);

        expect(response.status).to.be.equal(200);

        expect(response.data.age).not.to.be.equal(payload);

        expect(response.data).to.be.an("object");
    });

});