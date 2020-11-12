import express from 'express'
import smartApp from './smartapp'
import {Request, ParamsDictionary, Response} from "express-serve-static-core";


const server = express();
const PORT = 3001;

/* Configure Express to handle JSON lifecycle event calls from SmartThings */
server.use(express.json());
server.post('/', (req, res, next) => {
    smartApp.handleHttpCallback(req, res);
});

/* Start listening at your defined PORT */
server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
