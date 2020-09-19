let arr = [30, 1, 2, 5, 4, 10, 3, 6, 25, 11, 26, 120];

// suppose first item is the biggest
let big = arr[0];

for (i = 0 ; i < arr.length; i++){
    if (arr[i] > big){
        big = arr[i];
    }
}

console.log(big);