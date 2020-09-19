let num = 12;
let product;

for(i = 1; i <= num; i++){
    console.log('\t', i);
    for(j = 1; j <= 10; j++){
       product = i * j;
       console.log(product);
    }
}