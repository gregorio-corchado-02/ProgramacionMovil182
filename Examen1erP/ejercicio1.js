function paresDeArray(){
    

    let numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]
        let pares = [];
        let i = 0;
        for(item in numeros){
            if (numeros[item] %2 === 0){
                pares[i] = numeros[item];
                i++;
            };
        };
        return console.log(pares, numeros);
    
 
}

paresDeArray();

