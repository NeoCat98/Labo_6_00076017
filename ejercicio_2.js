function sumaYPromedio(array){
    cnts = 0;
    cantidad = 0;
    for (let n=0;n<array.length;n++) {
        cnts = cnts +array[0];
        cantidad++;
    }
    console.log('Suma: '||cnts||' Promedio: '||(cnts/cantidad));
}