function clave(numero){
    cadena = '';
    for (let n=0;n<numero.length;n++) {
        switch(numero[n]){
            case 0:
                cadena=cadena.concat('m');
                break;
            case 1:
                cadena=cadena.concat('u');
                break;
            case 2:
                cadena=cadena.concat('r');
                break;
            case 3:
                cadena=cadena.concat('c');
                break;
            case 4:
                cadena=cadena.concat('i');
                break;
            case 5:
                cadena=cadena.concat('e');
                break;
            case 6:
                cadena=cadena.concat('l');
                break;
            case 7:
                cadena=cadena.concat('a');
                break;
            case 8:
                cadena=cadena.concat('g');
                break;
            case 9:
                cadena=cadena.concat('o');
                break;
        }
    }
    return cadena;
}