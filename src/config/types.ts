type TEnv = string | number | boolean | undefined;

type TServer = {
    port: TEnv
};

type pokemon = {
    baseUrl: TEnv;
};

type TConfig = {
    server: TServer;
    pokemon: pokemon;
};

export { TConfig, TEnv };
