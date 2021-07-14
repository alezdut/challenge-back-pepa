import { TConfig } from './types';

const config: TConfig = {
    server: {
        port: process.env.SERVER_PORT
    },
    pokemon: {
        baseUrl: process.env.POK_URL
    }
};

export = config;
