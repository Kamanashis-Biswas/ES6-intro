//sunction declaration
/* function add(first,second) {
    const total=first+second;
    return total;
} */

const number = 56;

//function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
const add = (first, second) => first + second;


const add2 = function (first, second) {
    const total = first + second;
    return total;
}


const result = add(10, 20);
console.log(result);

//No parameter arrow function
const pi = () => 3.1416;

//one parameter
const doubleIt = (num) => num * 2;
//one parameter simple version
const fveTiomes = num => num * 5

//multi-line arrow function
//if you want to return something, use the return
const doMath=(x,y,z)=>{
    const firstSum=x+y;
    const secondSum=y+z;
    const multiplyResult=firstSum*secondSum;
    const result= multiplyResult/2;
    return result;
}