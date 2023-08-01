let names =['akash','shivansh','sanjay' ];

let userDetails=['akr','akr@gmail.com','123344',32]
let user={
    name: 'akr',
    email:'akr@gmail.com',
    password: '123344',
    age:32,
};
console.log(user.name);
console.log(user['name']);

console.log(user['email']);


user.password='lqhqelfhqelfhqlfh';
user.address = 'lko';

console.log(user);

let SmartPhone={
    brand:'Apple',
    model:'i14',
    price :105000,
    colors:['black','rose gold','white'],
    feature:{
        cpu:'a-bionic ',
        ram:'4gb',
        storage:'128gb'
    }
};
console.log(Object.keys(SmartPhone));
console.log(Object.values(SmartPhone));

// syntax to  access third olor from smartphone
console.log(SmartPhone.colors[2]);


SmartPhone.colors[2]='grey';
console.log(SmartPhone.colors[2]);

console.log(SmartPhone);

SmartPhone.feature.cpu='sd880';
console.log(SmartPhone.feature.cpu);

// display feature object
console.log(SmartPhone.feature);


let smartphone = [
    {
        brand:'Apple',
    model:'i14',
    price :105000,
    colors:['black','rose gold','white'],
    },

    {
        brand:'Apple',
    model:'i14',
    price :105000,
    colors:['black','rose gold','white'],
    },
    {
        brand:'Samsung',
    model:'S23',
    price :5000,
    colors:['black','gold','grey'],
    },
{
    brand:'poco',
    model:'p2',
    price :10000,
    colors:['black','rose gold','yellow'],
},
{
    brand:'iqooo',
    model:'12',
    price :10000,
    colors:['black','rose ','white'],
},



];

//1. change the price of second phone to 35000
//2.add a new color to second last phone
//3. add smartphone whose price is less than 50000


smartphone[1].price='35000';
console.log(smartphone[1].price);


smartphone.at(-2).colors.push('pink');
console.log(smartphone.at(-2).colors);

let count =0;
for(let phone of smartphone){
    if(phone.price<50000)
    {
          count++
    }
}
console.log(count);

// use map to find out all brand names
//use filter to get if prices are less


let brands=smartphone.map((p ) => {return p.brand})
console.log(new Set(brands));



let phone1=smartphone.filter((p ) => {return p.price<50000})
console.log(phone1);

let phone2=smartphone.filter((p ) => {return p.colors.includes('black')})
console.log(phone2);