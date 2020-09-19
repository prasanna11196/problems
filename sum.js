let num = 10;
let sum = 0;

for(i = 0; i <= num; i++){
    if(i % 5 == 0 || i % 3 == 0){
       // continue;
       sum = sum + i;
    }
}
console.log(sum);