import { Router } from 'express';
import getPokemonListController from "../controller/pokeController"

const router: Router = Router();

router.get('/pokemon/:name', getPokemonListController);

export = router;
