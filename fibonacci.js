let fibo = [0,1];
let sum = 1;
for(i = 2; i < 100; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    sum = sum + fibo[i];
}
console.log(fibo);
console.log('sum =' , sum);