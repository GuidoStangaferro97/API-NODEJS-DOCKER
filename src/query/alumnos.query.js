const QUERY = {
    SELECT_ALUMNOS: 'SELECT * FROM alumnos',
    SELECT_ALUMNO: 'SELECT * FROM alumnos WHERE id = ?',
    CREATE_ALUMNO: 'INSERT INTO alumnos(first_name, last_name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
    UPDATE_ALUMNO: 'UPDATE alumnos SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ? WHERE id = ?',
    DELETE_ALUMNO: 'DELETE FROM alumnos WHERE id = ?',
    CREATE_ALUMNO_PROCEDURE: 'CALL create_and_return(?, ?, ?, ?, ?)'
};


export default QUERY;