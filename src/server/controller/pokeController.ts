import { Request, Response, NextFunction } from 'express';
import getPokemonByName from '../../services/pokeServices';


const getPokemonListController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body
        const getPokemon = await getPokemonByName(name);
        res.status(200).json(getPokemon);
    } catch (err) {
        res.status(400).json("pokemon not found")
    }
};

export default getPokemonListController;
