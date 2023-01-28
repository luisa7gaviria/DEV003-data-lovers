# DATA LOVERS : STUDIO GHIBLI

## Definición del producto

Esta es una página web que va dirigida al público que es fanático de las películas del estudio de animación Ghibli, con el fin de que les sea útil para consultar respecto a alguna otra película en la que tengan interés, o en algún personaje. La página posee la información necesaria para satisfacer la curiosidad del usuario.

## Historias de usuario

Para tener en cuenta qué  debería incluir la página web y en cómo iba ser su navegación a través de ella se pensaron en las siguientes historias de usuario, con sus respectivos criterios de aceptación y lo que debe hacer para decir que está concluida:

#### HISTORIA DE USUARIO #1 
Como fanático de las películas de Studio Ghibli
Quiero ver las películas que tiene este estudio
Para saber cuántas y cuáles son

Criterios de aceptación
•	Página de bienvenida que te guíe a ver las películas
•	Botón de ingresar
•	Cuando ingrese a la página que estas se puedan apreciar

Definición de terminado
•	Botón funcional que al clickear te mande a la página que contiene las cards
•	Función que pinte cards con la información básica
•	Mostrar las cards en la interfaz


#### HISTORIA DE USUARIO #2
Como fanático de las películas de Studio Ghibli
Quisiera poder ordenar las películas por año de lanzamiento y rating
Para saber cuál es más reciente o cuál es más popular que otra

Criterios de aceptación
•	Sección de ordenar por: 
•	Select con las opciones para ordenar (Rating/Fecha de lanzamiento) en orden ascendente
•	Al clickear alguna de las opciones observar las películas ordenadas

Criterios de aceptación
•	Select funcional, cuando demos click en una opción, ejecutar la función
•	Función ordenar aplicando método Sort()
•	Pintar los datos ordenados
•	Pasar test unitario de función para ordenar


#### HISTORIA DE USUARIO #3
Como fanático de las películas de Studio Ghibli
Quiero poder filtrar por un director y/o productor específico
Para saber en cuantas películas ha participado cada uno

Criterios de aceptación
•	Barra de navegación que contenga el nombre general de Director y Productor
•	Que al pasar el cursor sobre estos elementos se desplieguen las opciones (Nombres)
•	Que cada opción sea clickeable
•	Opción de “otros” para agrupar los que participaron en menos de 2 películas
•	Al clickear sobre alguna opción podrá observar las películas dirigidas/producidas por el que eligió

Definición de terminado
•	Evento click en las opciones que se despliegan
•	Cuando damos click ejecutamos las funciones de filtrado para director y productor
•	Pintamos esos datos filtrados
•	Pasar test unitario de ambas funciones


#### HISTORIA DE USUARIO #4
Como fanático de las películas de Studio Ghibli
Quisiera poder buscar películas por su nombre o alguna letra que recuerde
Para no tener que scrollear demasiado hacia abajo para encontrarla 

Criterios de aceptación
•	Sección de búsqueda, en este caso un input tipo búsqueda
•	Poder digitar texto sobre ese input
•	Realizar búsqueda instantánea cuando escribimos una letra

Definición de terminado
•	Evento “keyup” en el input de búsqueda
•	Cada que soltamos una tecla ejecutamos la función de búsqueda
•	Esta función de búsqueda trabaja en conjunto con la función para pintar los datos
•	Conforme escribimos el contenido de la página cambia en base a ello
•	Aprobar test unitario de función de búsqueda

#### HISTORIA DE USUARIO #5
Como fanático de las películas de Studio Ghibli
Quisiera ver algún cálculo cuando ordeno las películas por rating
Para saber de manera porcentual si la mayoría de sus películas tiene un rating positivo  

Criterios de aceptación
•	Sección de información adicional 
•	Que esta sección contenga el cálculo hecho: “de todas las películas, un --% tiene un puntaje mayor a 90”
•	Poder apreciar esta sección cuando demos click a la opción de ordenar por rating

Definición de terminado
•	Enlazar la creación de esta sección junto a el evento click que posee la opción de ordenar por rating para que se ejecuten juntas
•	Función encargada de hacer el cálculo
•	Función donde creamos la sección con los datos obtenidos de la función del cálculo
•	Mostrar en interfaz la sección creada junto a las cards ordenadas por rating
•	Pasar test unitario de la función del cálculo 

#### HISTORIA DE USUARIO #6
Como fanático de las películas de Studio Ghibli
Quisiera poder acceder a la página desde cualquier dispositivo
Porque no siempre voy a contar con un computador a mi lado

Criterios de aceptación
•	Uso de media queries para definir el comportamiento de los estilos
•	Que los elementos se puedan apreciar cómodamente a la vista

Definición de terminado
•	Diseño responsive adaptable a una Tablet o celular
•	Que ofrezca casi (o) la misma experiencia de navegación

## Prototipos y Tests de usabilidad 

Comenzando con el boceto de nuestra página web pensamos en elementos que podrían resultar llamativos para el usuario, como una sidebar que desplegara un menú, tres posters gigantes que guiaban al usuario a secciones diferentes, según a donde eligiese dirigirse, y una sección de futuros lanzamientos, también en la distribución de el contenido tipo regilla usando cards.

### Baja fidelidad
![prototipo baja fidelidad](src/readmeimg/baja.png)
![prototipo baja fidelidad](src/readmeimg/baja2.jpg)


### Media fidelidad
### Alta fidelidad
