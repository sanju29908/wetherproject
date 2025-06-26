// var a = 100
// var b = 200
// if(a>b){
//     console.log( "a is the big number");
    
// }else{
//     console.log( "b is the big number");
    
// }

// var a = 1000
// var b = 2000
// var c = 300
// if(a<b&&a<c){
//     console.log("a is the big number");
    
// }else if(b<a&&b<c){
//     console.log("b is the big number");
    
// }else{
//     console.log("c is the big number");
    
// }
//  var a = 100 
//  var b = 200
//  var c = 300
//  var result = a>b && a>c ? "a is the big number" : b>a && b>c ? "b is te big number" : "c is the biggest number"
//  console.log(result);
 
// var time = "evening"
// switch (time) {
//     case "morning":
//         console.log("good morning");
//          break;
//     case "afternoon":
//         console.log("good afternoon");
//         break;
//     case "evening":
//         console.log("good evening");
//         break;
        
        

//     default:"morning"
//         break;
// }

// var day = "sunday"
// switch (day) {
//     case "monday":
//         console.log("happy monday");
//         break;
//     case "tuesday":
//         console.log("happy tuesday");
//         break;
//     case "wednesday":
//         console.log("happy wednesday");
//         break;
//     case "thursday":
//         console.log("happy thursday");
//         break;
        
        
        

//     default:"monday"
//         break;
// }

var n = 1634
var temp = n
var sum = 0
while(temp!=0){
    var remainder = temp%10
    sum += remainder*remainder*remainder*remainder
    temp = Math.floor(temp/10)
}
if(sum == n){
    console.log("armstrong");
    
}else{
    console.log("not armstrong");
    
}