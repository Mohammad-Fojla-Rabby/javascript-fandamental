// function plus(number1, number2){
//    var alls = number1 + number2;
//    return alls;
// }
// var total = plus(1, 2);
// console.log('aitae answer', total )
// function subtraction(num, numtwo){
//    var totals = num - numtwo ;
//    return totals;
// }
// var answers = subtraction(20, 10);
// console.log('ai tae answer', answers)
// function multiplication(num1, num2){
//    var multiply = num1 * num2;
//    return multiply;
// }
// var solve = multiplication(20,30);
// console.log('aita e answer', solve)
// function divition(one , two){
//    var debate = one / two;
//    return debate;
// }
// var fullkaj = divition(500, 50);
// console.log('aitae answer', fullkaj)
// 
// var numbers = [54, 35, 21, 98, 23, 101, 45, 67];
// for (var i = 0; i< numbers.length; i++){
//    var number = numbers[i];

//    if (number > 90){
//      continue;
//    }
//    console.log(number);
// }
// var answer ={ brand: "iphone", model: "13"};
// console.log(answer[brand]);
function getReminder(number1, number2){
  var total = number1 % number2;
  return total;
}
const reminder = getReminder(12,2);
console.log(reminder);