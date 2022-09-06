const words = ["spray", "elites", "limit", "apple", "exuberant"];

const newWords = []
// for (let i = 0; i < words.length; i++) {
//     const word = words[i]
//     if (word.length >= 6) {
//         newWords.push(word)
//     }
// }

console.log('newArray', newWords);
console.log('original', words);
const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);


const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 240,
        delivered: true,
    },
]
//Por ejemplo, filtremos los elementos del array orders cuyo total sea mayor a 150.

const rta2 = orders.filter(order => order.delivered && order.total >= 150);
console.log('rta2', rta2);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.toString().toLowerCase().includes(query);
    })
}

console.log('rta3',search('nico'));
