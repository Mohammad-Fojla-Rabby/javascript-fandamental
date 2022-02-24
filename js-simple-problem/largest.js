/* age = 17;
baccinecount =2;
isVaccinated = false;
if (age > 20 && baccinecount == 2){
  console.log('apnara bidesh a jata prben')
}
 else if (15< age <20 && baccinecount == 0){
   console.log('baccition niya felo')

 }
 else if ( 15<age<20 && baccinecount == 2 ){
   isVaccinated = true;
   console.log('amr 2doj vaccin complete now ')
             console.log(isVaccinated)
 } */
/*  function badget(taka){
if (taka < 5000){
  console.log('family niya tour dimu')
}
else if ( taka < 5000){
  console.log('not goint any tour only sleeping time now ')
}
else if (taka - 4000 > 2000){
  console.log('party hba dos barbi que')
}
else if (taka - 4000 < 2000){
  console.log(' simple shopping phrase now')
}



 }
 var add = badget(6500)
 console.log(add)
 */
/*  let x = 8.99;
let y = 9.999;
let result = (x < y) ? "x is big" : "y is big";
console.log(result) */
/* var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (var i = 0 ; i < arr.length; i++){
  var result = arr[i];
  console.log(result ,i);
} */
/* var num1 = 40;
var num2 = 70;
var num3 = 10
if (num1 < num2 && num1 < num3){
  console.log('this vai short lokka')
}
if (num2 < num1 && num2 < num3){
  console.log('this is the most short number')
}
if (num3 < num1 && num3 < num1){
  console.log('this is the short number ')
} */
/* for (i= 1; i <= 20; i ++){
if ( i % 2 != 0){
  console.log(i);

  }

} */
/* var num = 9;
for (i = 1 ; i <= 10; i++){
  var result = i * num;
  console.log(9 + "x" + i + "=" , result )
} */
/* var names = ['a', 'b', 'c', 'd'];
// var onk = names.pop();
console.log(names.push('e', 'f'))
console.log(names) */
/* function largestNumber(number){
  let largest = element ;
  for (let i = 0; i < number.length ; i++){
    let element = number[i];
    // console.log(i , age );
  }
}
const age  = [12, 23, 45, 56, 67, 24, 9, 12,];
const oldest = largestNumber(age);
console.log(element) */
/* var age = 400;
switch (age){
case 40:
  console.log('too old')
  break;
case 4:
  console.log('baby old')
  break;
case 50:
  console.log('very old')
  break;
  default:
    console.log('im auto')
} */
let numbers = [1,2,3,4,56,7,8,9];

// function numbers(array){
//   for (index = 0; index < array.length; index++){
//     if (array[index] % 2 == 0){
//       console.log(array[index])
//     }
//   }
// }
// // var newodd = ;
var newarray =[];
function find(array){
  for (index = 0; index < array.length; index++){
    if (array[index] % 2 == 0){
      // console.log(array[index])
      newarray.push(array[index])
    }
  }
  return newarray;
}
let even = find(numbers)
console.log(even);
var news = find([234,23,42,423,423,4,234,23,4,23,42,3,5,7,6])
console.log(news);
