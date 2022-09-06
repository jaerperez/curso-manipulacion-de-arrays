
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
]

console.log('original', orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);

// esto no se debe hacer porque estás modificando el objeto origimnal 
// en la respuesta 3 veremos cómo hacerlo sin afectar el objeto original

const rta2 = orders.map(item => {
    item.tax = 0.19;
    return item;
})
console.log('rta2', rta2);

//Opción correcta

const rta3=orders.map(item=>{
    return{
        ...item,
        tax:0.19
    }
})

console.log('rta3', rta3);