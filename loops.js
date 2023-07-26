//for loop
for(let i=0; i<=10;i++){
    console.log(i);
};
for(let i=20;i>=0;i-=3){
    console.log(i);
};
console.log("..............................");
//wap to print all pno divisible by 7 and 11 in range of 50 -1000
for(let i=50;i<=1000;i++)
{
    if(i%7==0&&i%11==0)
    {
        console.log(i);
    }
}
console.log("..............................");
// program to check if a niumber is a perfect square 
let a=25;
const sqrt = a**0.5;
// if(sqrt==parseInt(sqrt))
  // if(number.isInteger (sqrt))
 if(sqrt==parseInt(sqrt)){
    console.log('perfect square');
}
else
{
    console.log( 'not perfect square');
}
console.log("..............................");
   // while loop
   let mynum=5 
   while(mynum <=20){
    console.log(mynum);
    mynum+=2;
   }
   console.log("..............................");
   //do while

   mynum =5;

   do{
    console.log(mynum);
   }while(mynum>10)
 
   // write a program to reverse a number  

   let ac=101;
   let bc=0;
   let d=0
   while(ac>0){
    bc=ac%10;
     d=d*10+bc;
     ac=parseInt(ac/10);
   }
   console.log(d);
