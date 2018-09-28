function tipoSeleccionar(array,tipo){
    array2=[];
    for (let n=0;n<array.length;n++) {
        if(array[n]==tipo){
            array2.push(array[n]);
        }
    }
    return array2;
}