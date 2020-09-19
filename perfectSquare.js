// Program to print first 20 natural squares

let perfectSq =[];

for(i = 0; i < 500; i++ ){

    for(j = 0; j <= i; j++){

        if(i == j*j){
            perfectSq.push(i);
        }
    }
    if(perfectSq.length == 21){
        break;
    }
}
console.log(perfectSq);