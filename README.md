
# Challenge backEnd PP



## Installation

To run the project, simply clone the repository and install the PokeApi service dependencies.

```bash
git clone https://github.com/alezdut/challenge-back-pepa
```
```bash
npm install
```
Then you can run "npm start" to start the server.
```bash
npm start
```
run "npm test" to run tests.

```bash
npm test
```

## Usage

Make a GET request to http://localhost:[port]/pokemon/[pokemonName] and you will get a json containing:
{
   "name": "pokemonName",
   "order": 1 (order in the list),
   "base_experience": 100 (base experience of that Pokemon)
}
```bash
GET http://localhost:3000/pokemon/pikachu
```

