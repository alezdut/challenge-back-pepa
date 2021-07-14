import { Request, Response } from 'express';
import getPokemonByName from '../../services/pokeServices';

const getPokemonListController = async (req: Request, res: Response) => {
    try {
        const { name } = req.params
        const getPokemon = await getPokemonByName(name);
        res.status(200).json(getPokemon);
    } catch (err) {
        res.status(400).json("pokemon not found")
    }
};

export default getPokemonListController;
