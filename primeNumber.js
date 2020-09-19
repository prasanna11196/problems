let i, j, k;

// printing prime numbers below 30
for(i=2; i<=30; i++){
    
    for (let j = 2; j <i; ++j) { 
       k = i%j;
       // For non-prime numbers, remainder (k) = 0 
       if(k == 0){
           break;
       } 
    }
    if (k!=0){
    console.log(i);
    }
}
