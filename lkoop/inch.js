//  function mtokm(miles){
//      var km = miles * 12;
//      return km;

//  }
//  var meter = mtokm(120);
//  console.log('aita e answer', meter);
// function amikisochassi(number){
//     if (number % 2 != 1 ){
//         return false;
//     }
//     return true;
// }
// var odd = amikisochassi(5);
// console.log('odd nunber',odd);
// function leapYear(year){
//     if(year % 4 == 0){
//         return true;
//     }
//     else {
//         console.log('this condition is false')
//     }
// }
// var answer = leapYear(2022);
// console.log(answer);
193

// function leapYear(year)
// { 
//     for{ (year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);} 

// }
// var toal = leapYear(2034)
// function isThisYear(year){
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         return true;

//     }
//     else 
//     {
//         return false;
//     }

// }
// var isThisLeapYear = isThisYear(678)
// console.log(isThisLeapYear);
// function findLeapYear(year){
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         return true;


//     }
//     else{
//         return false;
//     }

// }
// var answer = findLeapYear(2300);
// console.log(answer);
// var a = 1;
// switch(a){
//     case 1:
//         document.write("one");
//         case 2:
//             document.write('two');
//             default:
//                 document.write("default");
// }
// var factorial = 1;
// for (var i = 1; i <= 7; i++) {

//     factorial = factorial * i;

// }
// console.log(factorial);
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));