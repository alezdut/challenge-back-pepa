"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const request_1 = __importDefault(require("../request"));
const urlPokeApi = `${config_1.pokemon.baseUrl}/pokemon/`;
const getPokemon = (name) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {};
    const data = yield request_1.default(urlPokeApi + name);
    // if (data === undefined) { return {} }
    result = { name: data.name, order: data.order, base_experience: data.base_experience };
    return result;
});
exports.default = getPokemon;
