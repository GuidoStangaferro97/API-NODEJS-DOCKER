    
# TP2-Docker-2022
Trabajo Práctico N° 2 - Docker

## Para ejecutar nuestra api, es necesario tener docker instalado.

### instalacion de la api:

- docker compose up -d
- ahora proceder a entrar al navegador http://localhost:3000  
 
### Desinstalar la api: 

- Primero paramos y borramos los contenedores con:  docker compose down  
- Segundo, borramos los archivos de la base de dato que se genero en nuestra pc: 
    rm -rf $home/database //en linux  
    c://user/{tu_Usuario}/database //en windows  
- Tercero, borramos las imagenes de docker: 
        docker images -a
        docker rmi {id de las imagenes} 


