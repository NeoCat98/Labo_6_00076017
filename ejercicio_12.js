array=[
    {
        nombre: 'Juan',
        edad: 13, 
    }
];
function ingresar(persona){
    array.push(nombre);
    console.log('Se ha agregado el nombre');
}
function buscar(persona){
    cnts = 0;
    encontro = false;
    for (i of array) {
        if (array.nombre == persona.nombre) {
            position = cnts;
            encontro = true;
        }
        cnts++;
    }
    if(true){
        console.log('La persona se encontro'+persona);
        return cnts;
    }
    else{
        console.log('No se encontro la persona');
    }
}

function Modificar(persona){

    console.log('Persona modificada');
}

function Eliminar(persona){
    position = buscar(persona);
    delete(array,position);
    console.log('Persona eliminada');
}

function Mostar(){
    for(i of array){
        console.log(i);
    }
}
