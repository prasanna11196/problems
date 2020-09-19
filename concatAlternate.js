let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let arr = [];
let length = arr1.length + arr2.length;
let empty = '';

for(i = 0; i < length; i++){
    if(i % 2 == 0){
        // arr1 elements occupy even index in the final array
        arr[i] = empty + arr1[i/2];
    }
    else{
        // arr2 elements occupy odd index in the final array
        arr[i] = empty + arr2[(i -1)/2];
    }
}
console.log(arr);
