import getPokemonListController from '../../src/server/controller/pokeController';
import pokeServices from '../../src/services/pokeServices';
import { Request, Response } from 'express';

jest.mock('../../src/services/pokeServices.ts');

describe('Get pokemon by name', () => {
  const jsonMock = jest.fn();
  const statusMock = jest.fn();
  const resMock: any = {
    status: statusMock.mockImplementation(() => ({
      json: jsonMock,
    })),
  };
  const reqMock: any = {
    params: {
      name: "charmander"
    }
  }
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  describe('get pokemon controller', () => {
    it('Should fetch a pokemon name, number and experience / success', async () => {
      const mockResponse = {
        "name": "charmander",
        "number": 5,
        "experience": 62
      }
      const serviceMock = <jest.Mock>pokeServices;
      serviceMock.mockReturnValue(mockResponse);

      await getPokemonListController(reqMock as Request, resMock as Response);

      expect(jsonMock).toHaveBeenCalledWith(mockResponse);
    })
  })

  describe('get pokemon controller', () => {
    it('Shouldn´t fetch a pokemon/ error', async () => {
      const mockResponse = "pokemon not found";
      const serviceMock = <jest.Mock>pokeServices;
      serviceMock.mockReturnValue(mockResponse);

      await getPokemonListController({ body: { Name: "lorem" } } as Request, resMock as Response);

      expect(jsonMock).toHaveBeenCalledWith(mockResponse);
    })
  })

});