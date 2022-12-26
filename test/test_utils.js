const API_URL = "http://localhost:5000/api/";
const axios = require('axios');



const createUser = async () => {
    const payload = {
        name: "Jessica",
        email: "js@gmail.com",
        age: 35
    }
    const response = await axios.post(API_URL + "/postuserinfo", payload);

    return response.data;

}

module.exports = {
    API_URL,
    createUser
}