import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from './domain/response.js';
import logger from './util/logger.js';
import HttpStatus from './controller/alumno.controller.js';
import alumnoRoutes from './route/alumno.route.js';

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/alumnos', alumnoRoutes);
app.get('/', (req, res)=>
    res.send( new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'API FUNCIONANDO') )
);
app.all('*', (req, res)=>
    res.status(HttpStatus.NOT_FOUND.code).send( new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'API NO ESTÁ FUNCIONANDO') )
);
app.listen(PORT, () => logger.info(`server running on: ${ip.address()}:${PORT}`));
