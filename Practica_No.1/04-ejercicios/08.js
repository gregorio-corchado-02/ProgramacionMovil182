let array = [{ 
    id: 1,
    name: 'Nicolas',
}, {
    name: 'Felipe',
    id: 2,
}, {
    name: 'Chanchito',
    id: 3,
}];

let pares = [ 
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "Chanchito" }],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
        
    };
    return pairs;
};

let resultado = toPairs(array);
console.log(resultado);
