import express from 'express';
import { getAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno } from '../controller/alumno.controller.js';

const alumnoRoutes = express.Router();

alumnoRoutes.route('/')
  .get(getAlumnos)
  .post(createAlumno);

alumnoRoutes.route('/:id')
  .get(getAlumno)
  .put(updateAlumno)
  .delete(deleteAlumno);

export default alumnoRoutes;