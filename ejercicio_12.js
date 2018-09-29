array=[{nombre: 'Juan',
        edad: 13}
];
function ingresar(persona){
    array.push(persona);
    console.log('Se ha agregado el nombre');
}
function buscar(nombre){
    cnts = 0;
    encontro = false;
    for (i of array) {
        if (i.nombre == nombre) {
            position = cnts;
            encontro = true;
        }
        cnts++;
    }
    if(true){
        console.log('La persona se encontro en la posicion: ');
        return cnts;
    }
    else{
        console.log('No se encontro la persona');
    }
}

function Modificar(nombre2){
    for (var i=0; i<array.length;i++){
        if(array[i].nombre=nombre2){
            array[i].nombre = prompt('Nuevo nombre');
            array[i].edad = prompt('Nueva edad');
        }
    }
    console.log('Persona modificada');
}

function Eliminar(nombre){
    cnts=0;
    encontro=false;
    for (i of array) {
        if (i.nombre == nombre) {
            position = cnts;
            encontro=true;
        }
        cnts++;
    }
    if(encontro){
        array.splice(position,1);
        console.log('Persona eliminada');
    }
    else{
        console.log('No se encontro a la persona');
    }

}

function Mostrar(){
    for(i of array){
        console.log(i);
    }
}

function Inicio(){
    n=0;
    while (n!=1) {
        opcion=prompt('1.INGRESAR PERSONAR\n2.BUSCAR PERSONA\n3.MODIFICAR PERSONA\n4.ELIMINAR PERSONA\n5.ELIMINAR PERSONA\n6.SALIR');
        if(opcion==1){
            persona = prompt('Ingrese a la persona ({nombre: ... edad: ...})');
            ingresar(persona);
            break;
        }
        else if(opcion==2){
            nombre = prompt('Ingrese el nombre');
            buscar(nombre);
            break;
        }
        else if(opcion==3){
            nombre = prompt('Ingrese el nombre');
            Modificar(nombre);
            break;
        }
        else if(opcion==4){
            nombre = prompt('Ingrese el nombre');
            Eliminar(nombre);
            break;
        }
        else if(opcion==5){
            Mostar();
            break;
        }
        else if(opcion==6){
            n=1;
            break;
        }
    }
}
