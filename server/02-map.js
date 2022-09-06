const letters = ['a', 'b', 'c'];

const newArray = letters.map(item => item + '++');
// const newArray=[];
// for(let index=0;index<letters.length;index++){
//     const element=letters[index];
//     newArray.push(element+'++');
// }

console.log('Original', letters);
console.log('new', newArray);

const data = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
]

function solution(array) {
    return array.map(item => {
        return {
            ...item,
            'taxes': parseInt(item.price * 0.19)
        }
    })
}; 


console.log(solution(data));