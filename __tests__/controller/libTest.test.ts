import getPokemon from '../../src/lib/poke-api/pokemon';
import get from "../../src/lib/request";

jest.mock("../../src/lib/request.ts");

describe('get pokemon controller', () => {

  it('test request  success', async () => {
    const mockResponse = {
      "name": "charmander",
      "order": 5,
      "base_experience": 62
    }

    const getMock = <jest.Mock>get;
    getMock.mockReturnValue(mockResponse);
    const result = await getPokemon("charmander");
    expect(result).toStrictEqual(getMock());
  })

})
