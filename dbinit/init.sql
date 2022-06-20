CREATE DATABASE IF NOT EXISTS alumnosdb;

USE alumnosdb;

DROP TABLE IF EXISTS alumnos;

CREATE TABLE alumnos (
  id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) DEFAULT NULL,
  last_name  VARCHAR(255) DEFAULT NULL,
  email      VARCHAR(255) DEFAULT NULL,
  phone      VARCHAR(255) DEFAULT NULL,
  address    VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT UQ_alumnos_Email UNIQUE (email)
);

DELIMITER //
CREATE PROCEDURE create_and_return(IN first_name VARCHAR(255), IN last_name VARCHAR(255), 
                  IN email VARCHAR(255), IN phone VARCHAR(255), IN address VARCHAR(255))
BEGIN
  INSERT INTO alumnos(first_name, last_name, email, phone, address) VALUES (first_name, last_name, email, phone, address);
  
  SET @ALUMNO_ID = LAST_INSERT_ID();

  SELECT * FROM alumnos WHERE id=@ALUMNO_ID;
END //
DELIMITER ;