import getPokemonListController from '../../src/server/controller/pokeController';
import getPokemon from '../../src/lib/poke-api/pokemon';
import pokeServices from '../../src/services/pokeServices';
import { Request, Response, NextFunction } from 'express';

jest.mock('../../src/services/pokeServices.ts');
jest.mock("../../src/lib/request.ts")
jest.mock("../../src/lib/poke-api/pokemon.ts")

describe('Get pokemon by name', () => {
  const jsonMock = jest.fn();
  const statusMock = jest.fn();
  const resMock: any = {
    status: statusMock.mockImplementation(() => ({
      json: jsonMock,
    })),
  };
  const reqMock: any = {
    body: {
      name: "pikachu"
    }
  }
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  describe('get pokemon controller', () => {
    it('Should fetch a list of abilities / success', async () => {
      const mockResponse = [
        {
          "abilities": [
            {
              "ability": {
                "name": "run-away",
                "url": "https://pokeapi.co/api/v2/ability/50/"
              },
              "is_hidden": false,
              "slot": 1
            },
            {
              "ability": {
                "name": "flash-fire",
                "url": "https://pokeapi.co/api/v2/ability/18/"
              },
              "is_hidden": false,
              "slot": 2
            },
            {
              "ability": {
                "name": "flame-body",
                "url": "https://pokeapi.co/api/v2/ability/49/"
              },
              "is_hidden": true,
              "slot": 3
            }
          ],
          "base_experience": 175,
          "forms": [
            {
              "name": "rapidash",
              "url": "https://pokeapi.co/api/v2/pokemon-form/78/"
            }
          ],
          "game_indices": [
            {
              "game_index": 164,
              "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
              }
            },
            {
              "game_index": 164,
              "version": {
                "name": "blue",
                "url": "https://pokeapi.co/api/v2/version/2/"
              }
            },
            {
              "game_index": 164,
              "version": {
                "name": "yellow",
                "url": "https://pokeapi.co/api/v2/version/3/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "gold",
                "url": "https://pokeapi.co/api/v2/version/4/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "silver",
                "url": "https://pokeapi.co/api/v2/version/5/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "crystal",
                "url": "https://pokeapi.co/api/v2/version/6/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "ruby",
                "url": "https://pokeapi.co/api/v2/version/7/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "sapphire",
                "url": "https://pokeapi.co/api/v2/version/8/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "emerald",
                "url": "https://pokeapi.co/api/v2/version/9/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "firered",
                "url": "https://pokeapi.co/api/v2/version/10/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "leafgreen",
                "url": "https://pokeapi.co/api/v2/version/11/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "diamond",
                "url": "https://pokeapi.co/api/v2/version/12/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "pearl",
                "url": "https://pokeapi.co/api/v2/version/13/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "platinum",
                "url": "https://pokeapi.co/api/v2/version/14/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "heartgold",
                "url": "https://pokeapi.co/api/v2/version/15/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "soulsilver",
                "url": "https://pokeapi.co/api/v2/version/16/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "black",
                "url": "https://pokeapi.co/api/v2/version/17/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "white",
                "url": "https://pokeapi.co/api/v2/version/18/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "black-2",
                "url": "https://pokeapi.co/api/v2/version/21/"
              }
            },
            {
              "game_index": 78,
              "version": {
                "name": "white-2",
                "url": "https://pokeapi.co/api/v2/version/22/"
              }
            }
          ],
          "height": 17,
          "held_items": [
            {
              "item": {
                "name": "shuca-berry",
                "url": "https://pokeapi.co/api/v2/item/168/"
              },
              "version_details": [
                {
                  "rarity": 5,
                  "version": {
                    "name": "diamond",
                    "url": "https://pokeapi.co/api/v2/version/12/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "pearl",
                    "url": "https://pokeapi.co/api/v2/version/13/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version/14/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "heartgold",
                    "url": "https://pokeapi.co/api/v2/version/15/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "soulsilver",
                    "url": "https://pokeapi.co/api/v2/version/16/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "black",
                    "url": "https://pokeapi.co/api/v2/version/17/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "white",
                    "url": "https://pokeapi.co/api/v2/version/18/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "black-2",
                    "url": "https://pokeapi.co/api/v2/version/21/"
                  }
                },
                {
                  "rarity": 5,
                  "version": {
                    "name": "white-2",
                    "url": "https://pokeapi.co/api/v2/version/22/"
                  }
                }
              ]
            }
          ],
          "id": 78,
          "is_default": true,
          "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/78/encounters",
          "moves": [
            {
              "move": {
                "name": "stomp",
                "url": "https://pokeapi.co/api/v2/move/23/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 32,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 32,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 17,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 19,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 17,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 17,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 17,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 17,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 17,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "headbutt",
                "url": "https://pokeapi.co/api/v2/move/29/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "fury-attack",
                "url": "https://pokeapi.co/api/v2/move/31/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 40,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "horn-drill",
                "url": "https://pokeapi.co/api/v2/move/32/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "tackle",
                "url": "https://pokeapi.co/api/v2/move/33/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "body-slam",
                "url": "https://pokeapi.co/api/v2/move/34/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "take-down",
                "url": "https://pokeapi.co/api/v2/move/36/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 47,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 47,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 34,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 34,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 31,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 31,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 31,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 28,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 28,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 28,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 29,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 31,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 31,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 29,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 29,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 29,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 29,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 29,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "double-edge",
                "url": "https://pokeapi.co/api/v2/move/38/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "tail-whip",
                "url": "https://pokeapi.co/api/v2/move/39/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 30,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 30,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 8,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 8,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 10,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 6,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 6,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "growl",
                "url": "https://pokeapi.co/api/v2/move/45/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 35,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 35,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 4,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 5,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 5,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 5,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 7,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 5,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 5,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "ember",
                "url": "https://pokeapi.co/api/v2/move/52/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 14,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 14,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 14,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 16,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 10,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 10,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 14,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 14,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                },
                {
                  "level_learned_at": 9,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "flamethrower",
                "url": "https://pokeapi.co/api/v2/move/53/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "hyper-beam",
                "url": "https://pokeapi.co/api/v2/move/63/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "low-kick",
                "url": "https://pokeapi.co/api/v2/move/67/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "strength",
                "url": "https://pokeapi.co/api/v2/move/70/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "solar-beam",
                "url": "https://pokeapi.co/api/v2/move/76/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "fire-spin",
                "url": "https://pokeapi.co/api/v2/move/83/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 39,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 39,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 26,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 26,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 24,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 24,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 25,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "toxic",
                "url": "https://pokeapi.co/api/v2/move/92/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "agility",
                "url": "https://pokeapi.co/api/v2/move/97/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 55,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 55,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 47,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 47,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 38,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 38,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 38,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 34,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 38,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 38,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "quick-attack",
                "url": "https://pokeapi.co/api/v2/move/98/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "rage",
                "url": "https://pokeapi.co/api/v2/move/99/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "mimic",
                "url": "https://pokeapi.co/api/v2/move/102/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "double-team",
                "url": "https://pokeapi.co/api/v2/move/104/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "reflect",
                "url": "https://pokeapi.co/api/v2/move/115/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "bide",
                "url": "https://pokeapi.co/api/v2/move/117/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "fire-blast",
                "url": "https://pokeapi.co/api/v2/move/126/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 61,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 61,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 63,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 63,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 63,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 38,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 37,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 41,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 63,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 63,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 41,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 41,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 41,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 41,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 41,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "swift",
                "url": "https://pokeapi.co/api/v2/move/129/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "skull-bash",
                "url": "https://pokeapi.co/api/v2/move/130/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "rest",
                "url": "https://pokeapi.co/api/v2/move/156/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "substitute",
                "url": "https://pokeapi.co/api/v2/move/164/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "red-blue",
                    "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "flame-wheel",
                "url": "https://pokeapi.co/api/v2/move/172/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 15,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 15,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 13,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "snore",
                "url": "https://pokeapi.co/api/v2/move/173/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "curse",
                "url": "https://pokeapi.co/api/v2/move/174/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "protect",
                "url": "https://pokeapi.co/api/v2/move/182/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "endure",
                "url": "https://pokeapi.co/api/v2/move/203/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "swagger",
                "url": "https://pokeapi.co/api/v2/move/207/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "attract",
                "url": "https://pokeapi.co/api/v2/move/213/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "sleep-talk",
                "url": "https://pokeapi.co/api/v2/move/214/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "return",
                "url": "https://pokeapi.co/api/v2/move/216/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "frustration",
                "url": "https://pokeapi.co/api/v2/move/218/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "megahorn",
                "url": "https://pokeapi.co/api/v2/move/224/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "iron-tail",
                "url": "https://pokeapi.co/api/v2/move/231/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "hidden-power",
                "url": "https://pokeapi.co/api/v2/move/237/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "sunny-day",
                "url": "https://pokeapi.co/api/v2/move/241/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "gold-silver",
                    "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "heat-wave",
                "url": "https://pokeapi.co/api/v2/move/257/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "will-o-wisp",
                "url": "https://pokeapi.co/api/v2/move/261/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "facade",
                "url": "https://pokeapi.co/api/v2/move/263/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "secret-power",
                "url": "https://pokeapi.co/api/v2/move/290/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "overheat",
                "url": "https://pokeapi.co/api/v2/move/315/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "bounce",
                "url": "https://pokeapi.co/api/v2/move/340/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 50,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ruby-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
                },
                {
                  "level_learned_at": 50,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
                },
                {
                  "level_learned_at": 50,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "firered-leafgreen",
                    "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 47,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 47,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 45,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 50,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "colosseum",
                    "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
                },
                {
                  "level_learned_at": 50,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "xd",
                    "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
                },
                {
                  "level_learned_at": 45,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 45,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 45,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 45,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 45,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "natural-gift",
                "url": "https://pokeapi.co/api/v2/move/363/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "flare-blitz",
                "url": "https://pokeapi.co/api/v2/move/394/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 58,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 56,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 56,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 49,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "poison-jab",
                "url": "https://pokeapi.co/api/v2/move/398/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 1,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "giga-impact",
                "url": "https://pokeapi.co/api/v2/move/416/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "captivate",
                "url": "https://pokeapi.co/api/v2/move/445/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "diamond-pearl",
                    "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "heartgold-soulsilver",
                    "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "flame-charge",
                "url": "https://pokeapi.co/api/v2/move/488/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 21,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 21,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 21,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 21,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 21,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 21,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "round",
                "url": "https://pokeapi.co/api/v2/move/496/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "echoed-voice",
                "url": "https://pokeapi.co/api/v2/move/497/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "incinerate",
                "url": "https://pokeapi.co/api/v2/move/510/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "inferno",
                "url": "https://pokeapi.co/api/v2/move/517/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 33,
                  "move_learn_method": {
                    "name": "level-up",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "wild-charge",
                "url": "https://pokeapi.co/api/v2/move/528/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-white",
                    "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "drill-run",
                "url": "https://pokeapi.co/api/v2/move/529/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "black-2-white-2",
                    "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "tutor",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "confide",
                "url": "https://pokeapi.co/api/v2/move/590/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "x-y",
                    "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "omega-ruby-alpha-sapphire",
                    "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            },
            {
              "move": {
                "name": "smart-strike",
                "url": "https://pokeapi.co/api/v2/move/684/"
              },
              "version_group_details": [
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "sun-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
                },
                {
                  "level_learned_at": 0,
                  "move_learn_method": {
                    "name": "machine",
                    "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                    "name": "ultra-sun-ultra-moon",
                    "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
                }
              ]
            }
          ],
          "name": "rapidash",
          "order": 119,
          "past_types": [],
          "species": {
            "name": "rapidash",
            "url": "https://pokeapi.co/api/v2/pokemon-species/78/"
          },
          "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/78.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/78.png",
            "front_shiny_female": null,
            "other": {
              "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
                "front_female": null
              },
              "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
              }
            },
            "versions": {
              "generation-i": {
                "red-blue": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/78.png",
                  "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/78.png",
                  "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/78.png"
                },
                "yellow": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/78.png",
                  "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/78.png",
                  "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/78.png"
                }
              },
              "generation-ii": {
                "crystal": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/78.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/78.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/78.png"
                },
                "gold": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/78.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/78.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/78.png"
                },
                "silver": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/78.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/78.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/78.png"
                }
              },
              "generation-iii": {
                "emerald": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/78.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/78.png"
                },
                "firered-leafgreen": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/78.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/78.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/78.png"
                },
                "ruby-sapphire": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/78.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/78.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/78.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/78.png"
                }
              },
              "generation-iv": {
                "diamond-pearl": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/78.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/78.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/78.png",
                  "front_shiny_female": null
                },
                "heartgold-soulsilver": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/78.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/78.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/78.png",
                  "front_shiny_female": null
                },
                "platinum": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/78.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/78.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/78.png",
                  "front_shiny_female": null
                }
              },
              "generation-v": {
                "black-white": {
                  "animated": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/78.gif",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/78.gif",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/78.gif",
                    "front_shiny_female": null
                  },
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/78.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/78.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/78.png",
                  "front_shiny_female": null
                }
              },
              "generation-vi": {
                "omegaruby-alphasapphire": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/78.png",
                  "front_shiny_female": null
                },
                "x-y": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/78.png",
                  "front_shiny_female": null
                }
              },
              "generation-vii": {
                "icons": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/78.png",
                  "front_female": null
                },
                "ultra-sun-ultra-moon": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/78.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/78.png",
                  "front_shiny_female": null
                }
              },
              "generation-viii": {
                "icons": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/78.png",
                  "front_female": null
                }
              }
            }
          },
          "stats": [
            {
              "base_stat": 65,
              "effort": 0,
              "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
              }
            },
            {
              "base_stat": 100,
              "effort": 0,
              "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
              }
            },
            {
              "base_stat": 70,
              "effort": 0,
              "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
              }
            },
            {
              "base_stat": 80,
              "effort": 0,
              "stat": {
                "name": "special-attack",
                "url": "https://pokeapi.co/api/v2/stat/4/"
              }
            },
            {
              "base_stat": 80,
              "effort": 0,
              "stat": {
                "name": "special-defense",
                "url": "https://pokeapi.co/api/v2/stat/5/"
              }
            },
            {
              "base_stat": 105,
              "effort": 2,
              "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
              }
            }
          ],
          "types": [
            {
              "slot": 1,
              "type": {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
              }
            }
          ],
          "weight": 950
        }];
      const serviceMock = <jest.Mock>pokeServices;
      serviceMock.mockReturnValue(mockResponse);

      await getPokemonListController(reqMock as Request, resMock as Response);

      expect(jsonMock).toHaveBeenCalledWith(mockResponse);
    })
  })

  describe('get pokemon controller', () => {
    it('Shouldn´t fetch a list of abilities / error', async () => {
      const mockResponse = ["pokemon not found"];
      const serviceMock = <jest.Mock>pokeServices;
      serviceMock.mockReturnValue(mockResponse);

      await getPokemonListController({ body: { Name: "lorem" } } as Request, resMock as Response);

      expect(jsonMock).toHaveBeenCalledWith(mockResponse);
    })
  })

});