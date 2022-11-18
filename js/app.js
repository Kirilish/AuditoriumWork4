// function decloreshion

/* console.log(handleMath(22, 2, 30)); можно вызывать функцию и сверху */
function handleMath(num1, num2, num3) {
  const pr = prompt("enter number");
  const res = num1 + num2 ** pr / num3;
  return res;
}
/* console.log(handleMath(22, 2, 30)); а можно и внизу */

// function exspretion

const useri1 = handleMath;
console.log(useri1(22, 2, 30));

// стрелочная функция(arrow fanc)

const arrowFunc = (a, b) => a + b
console.log(arrowFunc(1,2))

// iife самовыводящая вызывает чтчо внутри

/* (function (){
    console.log('IIFE');
})() */;

// чистая фнкция всё указывваеться нормально


let a = 'hello hello'
let b = a.toUpperCase()
console.log(a)
console.log(b)
let c = a.slice(-1).toUpperCase() // отрезает 1, -1
console.log(c)

console.log(a.split('')) // преобразет в массив
console.log(a.split(' ')) // пробел разделяет


const arr1 = []