function finonacciSeries(numbers){
const fibo = [0, 1];
for (i = 2; i <= numbers; i++){
    fibo[i] = fibo[i - 1] + fibo [i -2];

}


return fibo;
}
let expeted = finonacciSeries(1);
console.log(expeted);