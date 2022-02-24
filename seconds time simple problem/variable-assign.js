/* let first = 4;
let second = 7;

first = second;

first = first + 5;
first *= 5;

console.log(first)


let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element > largest) {
    // what this line means?
    largest = element;
  }

}

console.log(largest); */
/* function ispositive(numbers){
  let count = 0;
 for (i = 0; i < numbers.length; i++){
                  if(numbers[i] == 'a' || numbers[i] == 'e' || numbers[i] == 'i' || numbers[i] == 'o' || numbers[i] == 'u')
                  {
                    count++;
                  }
                  else{'no vowel letter found'}

 }
  return count;

}

let result = ispositive('apple')
console.log(result) */
const names = ['abul', 'babul' , 'sabul', 'babul', 'abul']
function findAlongnames(nameshab){
  const unique = [];
  for (const element of names){
    if(unique.indexOf(element) == -1){
     unique.push(element) 
    }

  }
return unique;
}
let result = findAlongnames(names)
console.log(result) 
