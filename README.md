SLECCIONADOR DE IDIOMAS 

El proyecto tiene como objetivo desarrollar un selector de idiomas 
para un menú genérico, que debe ofrecer versiones tanto en español 
como en inglés. Se busca la capacidad de cambiar todos los textos de 
un idioma a otro sin modificar directamente el código fuente. Los textos 
deben almacenarse en una base de datos para facilitar su gestión y 
permitir la adición de más idiomas sin necesidad de modificar el código y 
el programa recordara el ultimo idioma seleccionado cuando vuelva a ejecutarse.

--------------------------------------------------
Solucion:

Se creará un menú generico donde todos sus textos serán reemplazados
por un array[i], el array es rellenado con los datos de la base de datos
mongodb el cual tendra los campos id, espannol, ingles, para agregar nuevos
idiomas se podra generar un archivo .csv con los contenidos de la base de datos,
cada columna es un idioma y se debera agregar el nuevo idioma despues de la 
ultima columna, se cargara este archivo en la base de datos. Se creara otra 
tabla que contenga el nombre del ultimo idioma seleccionado.

id  | espannol | ingles | frances
1   | Hola     | hello  | bonjour

--------------------------------------------------
PARTES DEL PROGRAMA

FrontEnd        ---> No tiene
Backend         ---> nodeJS
Base de datos   ---> mongoDB

--------------------------------------------------
COMO EJECUTAR EL PROGRAMA 

Instalaciones:
- Nodejs
- MongoDB
  (busca en google o preguntale a chatgpt)

Dependencias necesarias(sirve cualquier version posterior):

    "express": "^4.18.3",
    "mongoose": "^8.2.1",
    "readline-sync": "^1.4.10"

Para instalarlas ir a la carpeta del proyecto y ejecutar por terminal:

npm i express mongoose readline-sync
