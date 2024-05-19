Proyecto para poder registrar y loggear usuarios usando autenticación con Firebase.
###Endpoints
###GET

`/api/downloadExcel`

Este va a descargar un formato de excel con datos quemados que pueden ser cambiados luego.

###POST
1.  `/api/registerNewUser`

	Con este endpoint se va a poder registrar un usuario mediante su correo y contraseña. Estos deben enviarse en el body de la peticion http.

	####Codigos de respuesta
	`404 Bad request`

	Los datos del correo o de la contraseña son incorrectos

	`200 ok`

	Los datos son enviados y han sido verificados en firebase
<br>

2.  `/api/loginUser`

	Con este endpoint un usuario ya registrado podrá loggearse mediante su correo y contraseña. Estos deben enviarse en el body de la peticion http.

	####Codigos de respuesta
	`404 Bad request`

	Los datos del correo o de la contraseña son incorrectos

	`200 ok`

	Los datos son enviados y han sido verificados en firebase

###Despliegue del proyecto
#####1.Frontend:
Para el frontend se puede usar el liveReload que ofrece Visual Studio Code o algún similar, ya que solo se compone de una página con contenido estático.
#####2.Backend:
Entrar a la carpeta *firebaseApi* y dentro de una terminal ejecutar el comando:

	npm install

Con este comando se instalarán todas las dependencias necesarias.

Despues de haber instalado las dependencias se debe configurar el archivo `.env` para configurar las variables de entorno en donde irá la configuración de nuestro proyecto de firebase.

Seguido a esto para iniciar el servidor y poder probar los endpoint, se debe ejecutar el siguiente comando en la terminal:

	npm run dev

De esta forma se iniciará el servidor y ya podremos hacer las peticiones http desde la propia página web o desde Postman
######2.1 Tecnologías usadas:
- Express: Establecer el servidor y los endpoint
- Cors: Seguridad en los dominios para las peticiones http
- Dotenv: Establecer variables de entorno
- Nodemon: Poder ver los cambios realizados en tiempo real sin tener que bajar y subir manualmente el servidor durante pruebas.
- excelJs: Librería para crear archivos excel