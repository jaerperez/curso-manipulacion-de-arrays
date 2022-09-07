const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log('Suma', sum);

const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta', rta);

const items = [5, 6, 7, 6, 5, 7, 7, 8];
const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]) {
        objeto[elemento] = 1
    } else {
        objeto[elemento] = objeto[elemento] + 1
    }
    return objeto
}, {})

console.log(frecuencias)


const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "low",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "low",
    },
    {
        name: "pedro",
        level: "hight",
    },
];

const rta1 = data
.map(item => item.level)
.filter(item=>item=='hight')
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);
