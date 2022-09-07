const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);

/**Reto  */

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray2 = profundidad(matriz2);

/** Reto 2 */

const hardMatrix = [
    [1, 2, [3, 3]],
    [4, [5, 5, [4, 2]], 6],
    [[1, [2, 3, 4, [3, [2, 1]]]], 8, 9],
    'paco'
  ];
  
  const recursiveArray = [];
  
  //La función recibe un array y el índice que se quiere evaluar
  const flatFunction = (array, index) => {
    // Si el índice ya es igual a lenght no hay comparación por hacer
    if (index === array.length) {
      return;
    }
  
    // Si el valor del array en ese índice es un objeto, vuelvo a llamar esta función con el índice cero.
    if (typeof array[index] === 'object') {
      flatFunction(array[index], 0);
    } else {
      // Si no es un objeto, es un valor, así que puedo hacer push()
      recursiveArray.push(array[index]);
    }
    // Independiente del If, hay que seguir evaluando las demás posiciones del array recibido.
    flatFunction(array, index + 1);
  };
  
  flatFunction(hardMatrix, 0);
  console.log('recursive:', recursiveArray);
  

  const matriz3 = [
    1,
    [1,2,3],
    [4,5,6],
    [7,8,[9,10,[11,12]]],
    function n(){}
];

const flatArray = (arr = [], data = []) => {
    if(typeof arr !== 'object') return [arr];
    arr.forEach(element => {
        if (typeof element === 'object') {
            flatArray(element, data);
        } else {
            data.push(element);
        }
    });
    return data;
}
console.log('recursividad3',flatArray(matriz3));