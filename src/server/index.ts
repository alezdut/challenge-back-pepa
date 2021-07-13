import http from 'http';
import httpContext from 'express-http-context';
import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import config from '../config';
import events from "./events"

const routes = require('./routes/pokeRoutes');

const {
    server: { port },
} = config;

const app: Application = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(httpContext.middleware);
//routes
app.use('/', routes);
//listen
app.listen(port, async () => {
    console.log("listening on port " + port)
});

server.on('error', events.onServerError);
