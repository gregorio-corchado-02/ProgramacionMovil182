function mayorEdad(){
    

    let estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];
        let i = 0;
        let mayores =[]
        for(item in estudiantes){
            let elemento = estudiantes[item];
            if (elemento.age >= 18){
                mayores[item] = [elemento.name];
                i++;
            };
        };
        return console.log(mayores, estudiantes);
    
 
}

mayorEdad();