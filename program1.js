// var a = 13
// if(a%2 == 0){
//     console.log(a,"is the even");
    
// }else{
//     console.log(a,"is the odd");
    
//

// var even = []
// var odd = []
// for(i=1;i<=100;i++){
//     if(i%2 == 0){
//       even.push(i)  
//     }else{
//         odd.push(i)
//     }

// }console.log(even);
// console.log(odd);

// var a = 10 
// var b = 20
// var c = 50
// var result = a>b&&a>c ? "a is big": b>a&&b>c ? "b is big":"c is big"
// console.log(result);

// function big(a,b,c){
//     return a>b&&a>c ? "a is big": b>a&&b>c ? "b is big":"c is big"
    
// }console.log(big(10,20,30));

// function big(a,b,c,d){
//     return a>b&&a>c&&a>d ? "a is big":b>a&&b>c&&b>d ? "b is big":c>a&&c>b&&c>d ?"c is big":"d is big"
// }console.log(big(10,20,30,40));

// var num = 5
// var isPrime = true
// for(i=2;i<num;i++){
//     if(num%i==0){
//         isPrime =false
//         break
//     }
// }console.log(isPrime);

// function prime(num){
//     var isPrime = true
//     for(i=2;i<num;i++){
//              if(num%i==0){
//                  isPrime =false
            
//              }
//              console.log(isPrime);}
                           
// }prime(11)

// for( var i=1;i<=100;i++){
//     var isPrime = true
//     for(j=2;j<i;j++){
//         if(i%j == 0){
//             isPrime = false

//         }
//     }if(isPrime==true){
//         console.log(i);
        
        
//     }
    
    
// }
// var arr = []
// for(var i=1;i<=100;i++){
//     var isPrime = true
//     for(j=2;j<i;j++){
//         if(i%j == 0){
//             isprime = false
//         }
//     }if(isPrime == true){
//         arr.push(i)
//         console.log(arr);
        
//     }
// }

// var num = 6
// var factorial = 1
// for(i=1;i<=num;i++){
    
//       factorial=factorial*i  
//     }


// console.log(factorial);

// var num = 11
// var isPrime = true
// for(i=2;i<num;i++){
//     if(num%2 == 0){
//         isPrime = false
//         break
//     }
// }console.log(isPrime);


//  var even = []
//  var odd = []
//  for(i=1;i<=100;i++){
//     if(i%2 == 0){
//         even.push(i)
//     }else{
//         odd.push(i)
//     }
//  }console.log(even);
//  console.log(odd);

//  var  n = 5
//  for( var i = 1;i<=10;i++){
//  console.log('${n} * ${i} = ${n*i}');

    
//  }

// var n1=0
// var n2=1
// var n3
// for(i=1;i<=10;i++){
//     n3=n1+n2
//     console.log(n3,"n3");
//     n1=n2
//     console.log(n2,"n2");
//     n2=n3
//     console.log(n1,"n1");
    
//     }
 
// var n = 1534
// var temp = n
// var sum = 0
// while(temp!=0){
//     var remainder = temp%10
//     sum += Math.pow(remainder,4)
//     temp = Math.floor(temp/10)
// }
// if(sum == n){
//     console.log("armstrong");
    

// }
 
//var n = 1634
// var temp = n
// var str = n.toString().length
// var sum = 0
// while(temp!=0){
//     var remainder = temp%10
//     sum += Math.pow(remainder,str)
//     temp = Math.floor(temp/10)
// }
// if(sum == n){
//     console.log("armstrong");
    
// }else{
//     console.log("not armstrong");
    
// }
 
// for( var i=1;i<=1000;i++){
//     var temp = i
//     var sum = 0
//     var str = i.toString().length
//     while(temp!=0){
//         var remainder = temp%10
//         sum += Math.pow(remainder,str)
//         var temp = Math.floor(temp/10)
        

//     }if(i == sum){
//         console.log(i);
//     }
// }

// function arm(n){
//     for( var i=1;i<=n;i++){
//         var temp = i
//         var sum = 0
//         var str = i.toString().length
//         while(temp!=0){
//             var remainder = temp%10
//             sum += Math.pow(remainder,str)
//             var temp = Math.floor(temp/10)
            
    
//         }if(i == sum){
//             console.log(i);
//         }
//     }

// }

// var a = 10
// var b = 20
// var operator = "*"
// if(operator == "+"){
//     console.log(a+b);
    
// }else if(operator == "-"){
//     console.log(a-b);
    
// }else if(operator == "*"){
//     console.log(a*b);
    
// }else if(operator == "/"){
//     console.log(a/b);
    
// }else if(operator == "%"){
//     console.log(a%b);
    
// }else{
//     console.log("enter the valid operator");
    
// }

// var n1 = 0
// var n2 = 1
// var n3
// for(var i=5;i<=15;i++){
//     console.log(n1);
//     n3=n1+n2
//     n1=n2
//     n2=n3
    
// }

// var n = 1534
// var temp = n
// var sum = 0
// while(temp!=0){
//     var remainder = temp%10
//     sum += Math.pow(remainder,4)

//     temp = Math.floor(temp/10)
// }
// if(sum == n){
//     consolec.log("armstrong");
    

// }

// var n = 10
// var sum =0
// for(i=1;i<=n;i++){
//     sum = sum + i
//     console.log(sum);
    
// }
