import { pokemon } from '../../config';
import get from '../request';

const urlPokeApi = `${<string>pokemon.baseUrl}/pokemon/`;

type TData = {
    name?: String;
    order?: Number;
    base_experience?: Number
};

const getPokemon = async (name: String): Promise<TData> => {
    let result: TData = {};
    const data = await get(urlPokeApi + name);
    // if (data === undefined) { return {} }
    result = { name: data.name, order: data.order, base_experience: data.base_experience }
    return result;
};

export default getPokemon;