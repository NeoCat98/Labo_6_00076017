function suma(arrayA,arrayB){
    arrayC=[];
    if(arrayA.length!=arrayB.length){
        console.log('No se puede sumar esas dos matrices');
    }
    else{
        for (let i=0;i<arrayA.length;i++) {
            if(arrayA[i].length!=arrayB[i].length){
                return 'No se puede sumar esas dos matrices';
            }
            else{
                arrayCaux=[];
                for (let j=0;j<arrayA[i].length;j++){
                    arrayCaux.push(arrayA[i][j]+arrayB[i][j]);
                }
            }
            arrayC.push(arrayCaux);
        }
        return arrayC;
    }
}
