function tipo(array){
    array2 =[];
    for (let n=0;n<array.length;n++) {
        array2.push(typeof array[n]);
    }
    return array2;
}
