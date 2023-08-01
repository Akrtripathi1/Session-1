function addnums(a,b){
   var c=a+b;
    console.log(c);

}
addnums(12,5)
//console.log(c);

const factorial=function(n){

    let f=1;
    for(let i=2;i<n;i++){
    f*=i;}
    console.log(f);
}

factorial(5);

const calcpercent =(m1,m2,m3,m4,m5) => {

    const total =m1+m2+m3+m4+m5;
    const percent=total/5
    console.log(percent);
    return percent
}
let percent =calcpercent(45,78,90,100,99)
console.log(percent);

