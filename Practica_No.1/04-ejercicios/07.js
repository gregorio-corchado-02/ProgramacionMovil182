function calculadora(precio,impuesto){
    let total;

    total = precio+(precio*impuesto);

    return console.log(total);
};

calculadora(19.90, 0.15);