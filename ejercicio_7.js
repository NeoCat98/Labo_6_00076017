function laboratorio(medicion){
    suma=0;
    cantidad=0;
    incerteza = 0;
    for (var i of medicion) {
        suma=suma+i;
        cantidad++;
    }
    promedio=suma/cantidad;
    for (var i of medicion){
        incerteza = incerteza + (i-promedio)**2;
    }
    incerteza = incerteza/(cantidad-1);
    console.log('x='+promedio+'+-'+incerteza);
}