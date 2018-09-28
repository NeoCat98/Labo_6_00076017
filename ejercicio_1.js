function ocurrencia(numero,array){
    cnts = 0;
    for (let n=0;n<array.length;n++) {
        if (array[n] == numero) {
            cnts++;
        }
    }
    return cnts;
}