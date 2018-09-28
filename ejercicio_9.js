function juego(){
    arrayA=[];
    gano=false;
    for (n=0;n<20;n++){
        arrayA.push(Math.floor((Math.random( )* 100) + 1));
    }
    let x = prompt('Adivina el numero entre el 1 al 100');
    for (a of arrayA){
        if(a==x){
            gano = true;
       }
    }
    if(gano){
        console.log('Ha ganado');
    }
    else{
        console.log('Perdio.')
    }
    console.log(arrayA);
}