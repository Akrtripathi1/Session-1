const nums =[3,7,5,1,9,33,4,88,74,50];

for(let i=0;i<nums.length;i++){
    console.log(nums[i]**2);
}
console.log('***********************');
//for of loop

for(let i of nums){
    console.log(i**2);
}
for(let i of 'hello world'){
    console.log(i);
}
//by slice
for(let i of nums.slice(0,3)){
    console.log(i**2);
}
 
//  program to filter ot odd numbers from arrays :
 const newArr=[];

 for(let i of nums)
{
    if(i%2==0){
        newArr.push(i)
    }
};
console.log(newArr);