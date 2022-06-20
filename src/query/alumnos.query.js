const QUERY = {
    SELECT_ALUMNOS: 'SELECT * FROM ALUMNOS',
    SELECT_ALUMNO: 'SELECT * FROM ALUMNOS WHERE id = ?',
    CREATE_ALUMNO: 'INSERT INTO ALUMNOS(first_name, last_name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
    UPDATE_ALUMNO: 'UPDATE ALUMNOS SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ? WHERE id = ?',
    DELETE_ALUMNO: 'DELETE FROM ALUMNOS WHERE id = ?',
    CREATE_ALUMNO_PROCEDURE: 'CALL create_and_return(?, ?, ?, ?, ?, ?, ?)'
};


export default QUERY;