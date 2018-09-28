function suma(array){
    for (let n=0;n<(array.length/2);n++) {
        console.log(array[0]+array[array.length-1-n]);
    }
}