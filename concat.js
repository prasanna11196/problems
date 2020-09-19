// program to concatanate two arrays

let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let length1 = arr1.length;
let length2 = arr2.length;
let length = length1 + length2;
let arr = [];
let empty = '';

for (i = 0; i < length; i++){
    if(i < length1){
        arr[i] = empty + arr1[i];
    }
    else{
        arr[i] = empty + arr2[i - length1];
    }
}

console.log(arr);