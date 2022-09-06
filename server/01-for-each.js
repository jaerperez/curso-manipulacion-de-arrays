const letters =['a','b','c'];

for (let i= 0; i< letters.length;i++){
    const element =letters[i];
    console.log('for',element);
}

letters.forEach(item=>console.log('foreach',item));

/***En este desafío tienes un array de números, 
 * usando la función map debes retornar todos los números 
 * del array multiplicados por dos.
 * La solución debería tener un input y output como los siguientes:

Input
solution([2, 4, 5, 6]);

Output
[4,8,10,12] */

function solution(array) {
	const r = [];
	array.forEach(dato => {
		r.push(dato * 2);
		
	})
	return r;
}; 
