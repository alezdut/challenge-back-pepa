import getPokemon from "../lib/poke-api/pokemon";

const getPokemonByName = async (Name: string): Promise<any[]> => {
    const result: any[] = await getPokemon(Name);
    return result;
};

export default getPokemonByName