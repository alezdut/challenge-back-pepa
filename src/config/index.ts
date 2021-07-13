import { TConfig } from './types';

const config: TConfig = {
    server: {
        port: process.env.SERVER_PORT || "3000"
    },
    pokemon: {
        baseUrl: process.env.POK_URL || "https://pokeapi.co/api/v2"
    }
};

export = config;
