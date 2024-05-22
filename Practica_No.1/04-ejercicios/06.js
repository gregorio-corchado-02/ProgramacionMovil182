let array = [2, 5, 7, 15, 5, -100, 55];



function cuantosPositivos (arr) {

    let i = 0;
    
    for(let elemento of array){
        
        if (elemento >= 0){
            i++;
        };
    };
    return console.log(i);
};
let resultado = cuantosPositivos (array);
