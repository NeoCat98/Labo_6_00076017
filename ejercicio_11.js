Array=[];
function almacen(nombre1,apellido1,fecha1,numero1,correo1){
    var objet1 = {
        Nombre: nombre1,
        Apellido: apellido1,
        FechaDeNacimiento: fecha1,
        Telefono: numero1,
        Correo: correo1,
    };
    Array.push(objet1);
    return 'Se agrego';
}