// Nivel 1: Selección de Elementos
// El objetivo de este nivel es familiarizarse con querySelector y querySelectorAll y ver los resultados en la consola.

// Seleccionar por ID:
// Selecciona el <h1> con el id main-title y muéstralo en la consola.

// Selecciona el aside con el id sidebar y muéstralo en la consola.

// Seleccionar por Clase:
// Selecciona todos los elementos con la clase nav-link y muestra la colección (NodeList) en la consola.

// Selecciona la primera tarjeta (.card) que encuentres en la sección de mamíferos y muéstrala en la consola.

// Seleccionar por Etiqueta:
// Selecciona todos los elementos <p> de la página y muéstralos en la consola.

// Seleccionar con Selectores Complejos:
// Selecciona todos los <li> que están dentro de la tarjeta del león.

// Selecciona el elemento con la clase important que está dentro de la tarjeta del delfín.

// Selecciona todas las tarjetas (.card) que estén dentro de la sección con id mammals.

// Seleccionar por Atributo:
// Selecciona todas las tarjetas que tengan el atributo data-animal-type="sea".


// Nivel 2: Modificación de Contenido y Clases
// Ahora se manipulan los elementos seleccionados.

// Cambiar Contenido:
// Cambia el texto del título principal (#main-title) por "La Gran Aventura Animal".

// Cambia el texto del enlace "Saber más..." (#more-info-link) por "Obtener más información".

// Modifica el contenido del footer para que incluya tu nombre.
// Manipular Clases:

// Añade la clase highlight a la sección de aves (#birds).

// Quita la clase important del <li> "Vista aguda" del águila.

// Usando toggle, haz que al hacer clic en cualquier tarjeta (.card), se le añada o quite la clase highlight. 
// (Pista: necesitarás un bucle para añadir el evento a todas las tarjetas).

// Nivel 3: Creación y Eliminación de Elementos
// En este nivel se añaden y se quitan elementos del DOM.

// Crear y Añadir Elementos:

// Crea un nuevo <h2> con el texto "Reptiles".
const newH2 = document.createElement('h2');
newH2.textContent = "Reptiles";

// Crea una nueva sección con id="reptiles" y la clase category.
const newSection = document.createElement('section');
newSection.id = "reptiles";
newSection.classList.add('category');
// Añade el <h2> que has creado dentro de la nueva sección.
newSection.appendChild(newH2);
// Finalmente, añade esta nueva sección de reptiles al main de la página, justo después de la sección de aves.
const main = document.querySelector('main');
const aside = document.getElementById('sidebar');
main.insertBefore(newSection, aside);
// Crear y Añadir una Nueva Tarjeta:
// Dentro de la nueva sección de reptiles, crea un article con la clase card.

// Dentro de la tarjeta, añade un <h3> con el texto "Serpiente".

// Añade también un párrafo <p> que diga "Reptil sin patas conocido por su sigilo.".

// Inserta esta nueva tarjeta dentro de la sección de reptiles.
const newCard = document.createElement('div');
newCard.classList.add('card-container');
newCard.innerHTML= `
                <article class="card" data-animal-type="land">
                    h3>Serpiente</h3>
                    <p>Reptil sin patas conocido por su sigilo</p>
                     <ul class="features">
                        <li class= "feature-item">No tiene patas</li>
                        <li class= "feature-item important">puede ser venenoso</li>
                    </ul>
                <article>
`;
// Eliminar Elementos:
// Selecciona y elimina el aside (#sidebar).

// Elimina la característica "Gran melena" de la lista de características del león.

// Nivel 4: Mover Elementos y Eventos
// Se combinan conceptos para reorganizar la página dinámicamente.

// Mover Elementos:
// Mueve la tarjeta del delfín para que aparezca antes que la del león dentro de la sección de mamíferos. 
// (Pista: usa insertBefore).

// Ejercicio Combinado (Bonus):
// Crea un botón button con el texto "Invertir Orden".

// Añade este botón justo después del <h1> principal.

// Haz que, al hacer clic en el botón, el orden de las secciones (#mammals y #birds) se invierta. 
// Es decir, si Aves está después de Mamíferos, al hacer clic, Aves debería aparecer primero. 
// Si se vuelve a hacer clic, deberían volver a su orden original.