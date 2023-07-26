const nums = [23,6,5,34,57,62,'8674'];
console.log(nums);
console.log(typeof nums);


const movies =['Batman','Barbie','Oppenheimer','conjuring','gadar','inception']

console.log(movies.length);

console.log(movies[3]);

// this way will show  undefined
console.log(movies[-2]);
//by using at we can give negative index number
console.log(movies.at(-2));


// slicing to excess multiple index esme ek jyada index likhte hai to ek pehle tak aajata hai:
console.log(movies.slice(2,5));
console.log(movies.slice(2));
console.log(movies.slice(2,100));

// adding elements

movies.push('the kashmir files');//add element at end of array

movies.unshift('Flash');//add element at start of array

console.log(movies);


//removing elements
movies.pop('');//REMOVE element at end of array

movies.shift('');//Remove element at start of array

console.log(movies);

//remove element from middle

//movies.splice(3,2);yaha par 2 ka matlab hai kitne element delete karne hai

movies.splice(3,2);

console.log(movies);
//yaha par first index ka remove karke frozen word add kiya hai 
movies.splice(1,1,'Frozen');

console.log(movies);
// ... is a split operator it help to make all element bring out of array

console.log(...movies);

console.log(['mi4',...movies,'mi1','mi2','mi3']);