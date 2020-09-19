let arr = ['Hello', 'World', 'in', 'a', 'frame'];

// 'big' stores the length of largest string in the list
let big = arr[0].length;

for(i = 0; i < arr.length; i++){
    if(arr[i].length > big){
        big = arr[i].length;
    }
}


// printing first line of *
for(k = 0; k < big + 4; k++){
    process.stdout.write('*');
}
process.stdout.write('\n');


//printing strings enclosed between *
for(k = 0; k < arr.length; k++){
    process.stdout.write('* ' + arr[k]);
    for(j = 0; j < big + 4 - arr[k].length - 3; j++){
        process.stdout.write(' ');
    }
    process.stdout.write('*' + '\n');
}


//printing last line of *
for(k = 0; k < big + 4; k++){
    process.stdout.write('*');
}