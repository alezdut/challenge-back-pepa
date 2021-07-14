"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const pokeController_1 = __importDefault(require("../controller/pokeController"));
const router = express_1.Router();
router.get('/pokemon/:name', pokeController_1.default);
module.exports = router;
