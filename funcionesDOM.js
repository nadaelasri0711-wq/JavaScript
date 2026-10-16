// Ejercicio 1: limpiarPanel()
//Una función que elimine cualquier contenido de la div con id ="personas"

function limpiarPanel(){
    document.getElementById("personas").innerHTML = "";
}

//Ejercicio 2: mostrarNombres(personas = PERSONAS)
// Mostrar todos los nombres de las personas en el div personas, por ejemplo, como listado

function mostrarNombres(personas = PERSONAS){
    limpiarPanel();
    const lista = document.createElement("ul");
    nombres(personas).forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
    document.getElementById("personas").appendChild(lista);
}

//Ejercicio 3: botonesPersonas()
//insertar en el <nav> un botón por cada persona. Cada botón muestra el nombre y tiene onclick="mostrarPersonaId(id_de_la_persona)"

function botonesPersonas (){
    const nav = document.querySelector("nav");
    nav.querySelectorAll(".btn-persona").forEach (boton => boton.remove());

    PERSONAS.forEach (persona =>{
        const boton = document.createElement("button");
        boton.className ="btn-persona";
        boton.textContent = persona.nombre;
        boton.setAttribute("onclick", 'mostrarPersnaId(${persona.id})');
        nav.appendChild(boton);
    });
}

// Ejercicio 4: mostrarPersona(persona)
// recibir un objeto persona y meter sus datos en el div personas con este formato:

function mostrarPersona(persona){
    const panel = document.getElementById("personas");

    const div = document.createElement("div");
    div.className = "persona";

    const titulo = document.createElement("h2");
    titulo.textContent = '${persona.nombre} (${persona.edad})';

    const estudios = document.createElement("p");
    estudios.textContent = persona.estudios;

    const lista = document.createElement("ul");
    persona.intereses.forEach(interes => {
        const li = document.createElement("li");
        li.textContent = interes;
        lista.appendChild(li);
    });

    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () =>{
        eliminarPersona(PERSONAS,persona.id);
        mostrarListadoPersonas(PERSONAS);
        botonesPersonas();
    });

    div.append(titulo,estudios,lista, botonEliminar);
    panel.appendChild(div);
}

// Ejercicio 5: mostrarPersonaId(id)
// mostrar la persona de la lista cuyo id se pasa como parámetro, en el div personas y con el formato anterior.

function mostrarPersonaId(id){
    const persona = buscarPersonaId(PERSONAS, id);
    limpiarPanel();
    if(persona){
        mostrarPersona(persona);
    }
}

//Ejercicio 6: mostrarListadoPersonas(personas)
//recibir un array de personas y mostrarlas todas en el div personas con el formato del ejercicio 4

function mostrarListadoPersonas(personas){
    limpiarPanel();
    personas.forEach (persona => mostrarPersona(persona));
}

//Ejercicio 7: crearPersona()
//leer los inputs de nombre, edad, estudios e intereses (el id será un número aleatorio entre 1 y 99999),
//  insertar la persona en PERSONAS y volver a mostrar el listado en pantalla.

function crearPersona(){
    const nombre = document.getElementById("inputNombre").value.trim();
    const edad = Number(document.getElementById("inputEdad").value);
    const estudios = document.getElementById("inputEstudios").value.trim();
    const interesesTexto = document.getElementById("inputIntereses").value;

    if (nombre === "" || estudios === "" || !(edad >= 18)){
        alert ("Rellena nombre y estudios, y pon una edad de 18 o más.");
    }

    const listaIntereses = interesesTexto.split(",").map(intereses.trim()).filter(interes => interes != "");

    let id; 

    do{
        id = Math.floor(Math.random()* 99999) + 1;
    } while (buscarPersonaPorId(PERSONAS, id));

    insertarPersona(PERSONAS, id, nombre, edad, estudios, listaIntereses);

    mostrarListadoPersonas(PERSONAS);
    botonesPersonas();

    document.getElementById("inputNombre").value ="";
    document.getElementById("inputEdad").value = "";
    document.getElementById("inputEstudios").value ="";
    document.getElementById("inputIntereses").value="";
}


// Ejercicio 8: filtrarEdad()
//la función recoge los datos de los inputs de filtrar por edad (mínima y máxima) y muestra las personas filtradas

    function filtrarEdad(){
        const textoMin = document.getElementById("minima").value;
        const textoMax = document.getElementById("maxima").value;

        const minima = textoMin === "" ? 0 : Number(textoMin);
        const maxima = textoMax === "" ? Infinity : Number(textoMax);

        mostrarListadoPersonas(filtrarPersonasPorEdad(PERSONAS, minima, maxima));
    }

//Ejercicio 9: botón Eliminar
//añadir en la visualización de una persona (ejercicio 4) un botón para eliminarla. Se debe eliminar del listado PERSONAS y actualizar el panel

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        eliminarPersona(PERSONAS, persona.id);
        mostrarListadoPersonas(PERSONAS);
        botonesPersonas();
    });