const nums =[1,5,7,6,23,89,75,32];

// program to square each element of array :

const res =nums.map( (n) => { return n**2 });

console.log(res);

// program to divide each element of array by 2 :

const tek=nums.map((k) =>{ return k/2});

console.log(tek);

// program to convert each element of array to integer :

const prices =['$43.99','$9.20','$992.50','$34.999'];

const res3= prices.map((p) => {return parseInt(p.slice(1))});

console.log(res3);

const res4 =nums.map( (n) => {  return n%2===0 ? n/2:n*3 });

console.log(res4);
//map humesha array ko modify karta hai bas kuch add or remove nhi karta



// **************filters***********************

const filterArr1 =nums.filter((a) => {return a%2===0});
console.log(filterArr1);

// 

const prices2=[345,299,788,1024,99,291,124,3821,800];
//filter less than 500
const res5=prices2.filter((b)=>{ return b<=500})
console.log(res5);
// filter non square
const res6=prices2.filter((b)=>{ return Math.sqrt(b)%1===0})
console.log(res6);
const res7=prices2.filter((b)=>{ })