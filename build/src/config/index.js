"use strict";
const config = {
    server: {
        port: process.env.SERVER_PORT || "3000"
    },
    pokemon: {
        baseUrl: process.env.POK_URL || "https://pokeapi.co/api/v2"
    }
};
module.exports = config;
