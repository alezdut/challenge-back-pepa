import getPokemon from "../lib/poke-api/pokemon";

type TData = {
    name?: String;
    number?: Number;
    experience?: Number
};

const getPokemonByName = async (Name: string): Promise<TData> => {
    const result: TData = await getPokemon(Name);
    return result;
};

export default getPokemonByName