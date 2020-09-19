let arr = [2, 4, 7, 12, 9, 20];
let shiftedArr = [];
let empty = '';
let k = 2;

for (i = 0; i < arr.length; i++){

    if(i+k < arr.length ){
        
        shiftedArr[i+k] = arr[i];
    }
    else{
        shiftedArr[i + k - arr.length] = arr[i];

        }
}
console.log(shiftedArr);