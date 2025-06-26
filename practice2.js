//  var a = 10
//  var b = 20
//  var operator = "+"
//  if(operator == "+"){
//     console.log(a+b);
    
//  }else if(operator == "-"){
//     console.log(a-b);
    
//  }else if(operator == "*"){
//     console.log(a*b);
    
//  }else if(operator == "/"){
//     console.log(a/b);
    
//  }else if(operator == "%"){
//     console.log("a%b");
    
//  }else{
//     console.log("enter the valid operator");
    
//  }

// for(var i=1;i<=1000;i++){
//     var temp = i
//     var sum = 0
//     var str = i.toString().length 
// while(temp!=0){
//     var remainder = temp%10
//      sum += Math.pow(remainder,str)
//     var temp = Math.floor(temp/10)

    
// }if(i == sum){
//     console.log(i);
// }
// }

// var n = 1534
// var temp = n
// var sum = 0
// var str = n.toString().length
// while (temp!=0) {
//     var remainder = temp%10
//     sum += Math.pow(remainder,str)
//     var temp = Math.floor(temp/10)
    
// }if(sum == n){
//     console.log("armstrong");
//   }else{console.log("is not an armstrong");
// }

// var n1 = 0
// var n2 = 1
// var n3
// for(i=1;i<=10;i++){
//     console.log(n1);
//     n3=n1+n2
//     n1=n2
//     n2=n3
    
// }

// var n = 5
// for(i=1;i<=20;i++){

//         console.log( (`${n}*${i}=${n*i}`));
        
        
// }

// var even = []
//  var odd = []
//  for(i=1;i<=100;i++){
//     if(i%2 == 0){
//         even.push(i)
//     }else{
//         odd.push(i)
//     }
//  }console.log(even);
//  console.log(odd);

// var num = 5
//  var factorial = 1
// for(i=1;i<=num;i++){
//     factorial = factorial*i
//     console.log(factorial);
    
// }

// for(var i=1;i<=100;i++){
//     var isPrime=true
//     for(j=2;j<i;j++){
//        if(i%j == 0)
//        isPrime=false  
//     }if(isPrime==true)
//         console.log(i);
        

// }

// var n = 10
// var sum = 0
// for(var i=1;i<=20;i++){
//     sum = sum+i
//     console.log(sum);
    
// }

// function show(n){
//     var sum = 0
//     for(var i=1;i<=20;i++){
//         sum = sum+i
//         console.log(sum);
        
//     }
// }
// show(20)

// var a = 154
// var b = 163
// var c = a%10
// var d = b%10
// if(c == d){
//     console.log("same last digits");
    
// }else{
//     console.log("not same last digits");
    
// }

// function digit(a,b){}
//     var c = a%10
//     var d = b%10
//     if(c == d){
//         console.log("same last digits");
        
//     }else{
//         console.log("not same last digits");
        
//     }

//  var a = 60
// var b = 72

// for(var i = 1;i<=50;i++){
//     if(a%i == 0 && b%i == 0){
//         hcf = i
//     }
// }
// console.log(hcf);

// var num1 = 6
// var num2 = 8
// var min = num1>num2 ? num1:num2
// while(true){
//     if(min%num1 == 0 && min%num2 == 0){
//         console.log(min);
//         break;
//     }
//     min++



var n=10
var arr = []
for(var i = 1;i<=n;i++){
    if(n%2==0){arr.push(i)}
}console.log(arr);



//recursion

//  var n =10
//  var sum =0
//  for(var i = 1;i<=n;i++){
//     sum = sum + i
//     console.log(sum);
    
//  }
//  function show(n){
//     if(n>0){
//         console.log(n);
//         return n + show(n-1)
        
//     }else{
    
//         return n 
        
//     }
//  }
//  console.log(show(5));
 
// var a =Math.random()
// console.log(a);

// var a = Math.round(Math.random()*1000)
// var b = 

//  fibanoci(a){
//     var n1 = 0
//     var n2 = 1
//     var n3
// for(var i=1;i<a;i++){
//     console.log(n1);
    
    
//     n3=n1+n2
//     n1=n2
//     n2=n3
    
// }
// }
// fibanoci(10)

//fibinoci recursion

// function fibinoci(num){
//     if(num<2){
//         return num
//     }else{
//         return fibinoci(num-1)+fibinoci(num-2)
//     }
// }
// var terms = 10
// for(i=0;i<terms;i++){
//     console.log(fibinoci(i));
    
// }

// var myObj = {
//     name : "java script",
//    city  :"hyd",
//     age : 100

// }
// console.log(myObj.name);

// for(var i in myObj){
//     console.log(myObj[i]);
    
// }

// var myObj = {
//     name : "java script",
//     city : "hyd"
// }
// myObj.num = 112345
// myObj.name = "type script"
// delete myObj.city
// console.log(myObj);                                         

// var myObj = {
//     name :"java script",
//     city : "hyd",
//     age : 100
    
// }
// var newObj = {...myObj}
// newObj.name = "types script"
// console.log(newObj);
// console.log(myObj);
//var newObj = object.assin({},myObj)
//var newObj = JSON.stringify(myObj)

// var myObj = {
//     name : "java script",
//     city : "hyd",
//     age : 100
// }

//  var newObj = {...myObj}
//  newObj.gender = "male"
//  console.log(newObj);
 

// function factorial(num){
//     if(num<2){
//         return num
//     }else{
//         return num * factorial(num-1)
//     }
// }
// var terms = 10
// for(i=0;i<terms;i++){
//     console.log(factorial(i));
    
// }
// var myObj = {
//     name : "simhadri",
//     city : "rajamandry",
//     number : 9985666324
// }
// myObj.gender = "male"
// delete myObj.number
// myObj.name = "sanjay"
// console.log(myObj);

