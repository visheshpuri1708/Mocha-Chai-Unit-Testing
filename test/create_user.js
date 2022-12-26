const expect = require('chai').expect;
let chai = require('chai');
let should = chai.should();
const axios = require('axios');

const { API_URL } = require("./test_utils");
let newuser = undefined;

const { before } = require("mocha");

describe("Create New User", function () {
    it("User Correctly Created", async () => {
        const payload = {
            name: "Jon Doe",
            email: "doe@gmail.com",
            age: 21
        };

        const response = await axios.post(API_URL + "/postuserinfo", payload);
        expect(response.status).to.be.equal(201);
        expect(response.data).to.be.an("object");
    })


    it("User Correctly Created Without Adding User Name", async () => {

        try {

            const payload = {
                email: "doe@gmail.com",
                age: 21
            };

            const response = await axios.post(API_URL + "/postuserinfo", payload);
            expect(response.status).not.to.be.equal(201);
            expect(response.data).to.be.an("object");

        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(201);
            } else {
                throw error;
            }

        }








    });

    it("User Correctly Created Without Adding Email", async () => {

        try {

            const payload = {
                name: "Jon Doe",
                age: 21
            };

            const response = await axios.post(API_URL + "/postuserinfo", payload);
            expect(response.status).not.to.be.equal(201);
            expect(response.data).to.be.an("object");

        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(201);
            } else {
                throw error;
            }

        }
    });

    it("User Correctly Created Without Adding Age", async () => {

        try {

            const payload = {
                name: "Jon Doe",
                email: "doe@gmail.com"
            };

            const response = await axios.post(API_URL + "/postuserinfo", payload);
            expect(response.status).not.to.be.equal(201);
            expect(response.data).to.be.an("object");

        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(201);
            } else {
                throw error;
            }

        }
    });


})