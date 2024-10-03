const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');

let users = [
    {
        username: "admin",
        password: bcrypt.hashSync("12345", 10),
        apiKey: uuidv4() 
    },
    {
        username: "user",
        password: bcrypt.hashSync("password", 10),
        apiKey: uuidv4() 
    },
];

function getUserByUsername(username) {
    return users.find((user) => user.username === username);
}

function getUserByApiKey(apiKey) {
    return users.find((user) => user.apiKey === apiKey);
}

module.exports = {
    getUserByUsername,
    getUserByApiKey
};
