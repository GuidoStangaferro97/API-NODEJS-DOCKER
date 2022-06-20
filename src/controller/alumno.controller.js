import database from '../config/mysql.config.js';
import Response from '../domain/response.js';
import logger from '../util/logger.js';
import QUERY from '../query/alumnos.query.js';

const HttpStatus = {
    OK: { code: 200, status: 'OK' },
    CREATED: { code: 201, status: 'CREATED' },
    NO_CONTENT: { code: 204, status: 'NO_CONTENT' },
    BAD_REQUEST: { code: 400, status: 'BAD_REQUEST' },
    NOT_FOUND: { code: 404, status: 'NOT_FOUND' },
    INTERNAL_SERVER_ERROR: { code: 500, status: 'INTERNAL_SERVER_ERROR' }
};


export const getAlumnos = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, obteniendo alumnos`);
    database.query(QUERY.SELECT_ALUMNOS, (error, results) => {
    if (!results) {
        res.status(HttpStatus.OK.code)
          .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `No se encontraron alumnos`));
        } else {
        res.status(HttpStatus.OK.code)
          .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Alumnos encontrados`, { alumnos: results }));
        }
    });
};


export const getAlumno = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, obteniendo alumno`);
    database.query(QUERY.SELECT_ALUMNO, [req.params.id], (error, results) => {
    if (!results[0]) {
        res.status(HttpStatus.NOT_FOUND.code)
          .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `Alumno con id ${req.params.id} no fue encontrado`));
        } else {
        res.status(HttpStatus.OK.code)
          .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Alumno encontrado`, results[0]));
        }
    });
};


export const createAlumno = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creando alumno`);
    database.query(QUERY.CREATE_ALUMNO_PROCEDURE, Object.values(req.body), (error, results) => {
    if (!results) {
        logger.error(error.message);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
          .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error`));
        } else {
        //const alumno = { id: results.insertedId, ...req.body, created_at: new Date() };
        const alumno = results[0][0];
        res.status(HttpStatus.CREATED.code)
          .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, `Alumno creado`, { alumno }));
        }
    });
};


export const updateAlumno = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, cargando alumno`);
    database.query(QUERY.SELECT_ALUMNO, [req.params.id], (error, results) => {
    if (!results[0]) {
        res.status(HttpStatus.NOT_FOUND.code)
          .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `Alumno con id ${req.params.id} no encontrado`));
        } else {
        logger.info(`${req.method} ${req.originalUrl}, acutalizando alumno`);
        database.query(QUERY.UPDATE_ALUMNO, [...Object.values(req.body), req.params.id], (error, results) => {
        if (!error) {
            res.status(HttpStatus.OK.code)
              .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Alumno actualizado`, { id: req.params.id, ...req.body }));
            } else {
            logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
              .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error`));
            }
        });
        }   
    });
};

export const deleteAlumno = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, eliminando alumno`);
    database.query(QUERY.DELETE_ALUMNO, [req.params.id], (error, results) => {
    if (results.affectedRows > 0) {
        res.status(HttpStatus.OK.code)
          .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Alumno eliminado`, results[0]));
        } else {
        res.status(HttpStatus.NOT_FOUND.code)
          .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `Alumno con id ${req.params.id} no encontrado`));
        }
    });
};


export default HttpStatus;