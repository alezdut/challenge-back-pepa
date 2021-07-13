import { pokemon } from '../../config';
import get from '../request';

const urlPokeApi = `${<string>pokemon.baseUrl}/pokemon/`;

const getPokemon = async (name: String): Promise<any[]> => {
    let result = [];
    const { data } = await get(urlPokeApi + name);
    if (data) {
        result = data;
    }
    return result;
};

export default getPokemon