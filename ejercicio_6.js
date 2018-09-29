function clave(numero){
    num = numero.toString();
    cadena="";
    for (let n=0;n<num.length;n++) {
        console.log(num[n]);
        switch(num[n]){
            case "0":
                cadena=cadena+"m";
                break;
            case "1":
                cadena=cadena+"u";
                break;
            case "2":
                cadena=cadena+"r";
                break;
            case "3":
                cadena=cadena+"c";
                break;
            case "4":
                cadena=cadena+"i";
                break;
            case "5":
                cadena=cadena+"e";
                break;
            case "6":
                cadena=cadena+"l";
                break;
            case "7":
                cadena=cadena+"a";
                break;
            case "8":
                cadena=cadena+"g";
                break;
            case "9":
                cadena=cadena+"o";
                break;
        }
    }
    return cadena;
}