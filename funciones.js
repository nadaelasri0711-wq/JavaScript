function buscarPersonaPorId(personas, id){
    return personas.find (persona => persona.id == id);
}

function filtrarPersonasPorEstudios(personas, estudios){
    return personas.filter(persona => persona.estudios == estudios);
}

function filtrarPersonasPorEdad(personas, minEdad, maxEdad){
    return personas.filter (persona => persona.edad >= minEdad && persona.edad <= maxEdad){

    }
}

function filtrarPersonaPorInteres (personas, interes){
    return personas.filter (persona => persona.intereses.includes(interes));
}

function nombres (personas){
    return personas.map (persona => persona.nombre);
}

function mediaEdad (personas){
    if (personas.length == 0) return 0;
    const suma = persona.reduce((acumulado, persona) => acumulado + persona.edad, 0);
    return suma / personas.length;
}

function intereses (personas){
    return [...new Set (personas.flatMap(persona => persona.intereses))];
}

function insertarPersona (personas, id, nombre, edad, estudios, intereses){
    persona.push({id, nombre, edad, estudios, intereses });
}

function eliminarPersona (personas, id){
    const posicion = personas.findIndex (persona => persona.id == id);
    if(posicion != -1){
        personas.splice(posicion, 1);
    }
}