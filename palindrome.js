// enter string as an array
let str = ['n','1','a','y','a','1','n'];

// variable for reversed string
let rStr;

let flag = 1;

for(i = str.length - 1; i >= 0; i--){
    let k = str.length;
    let m = (i + 1 - k) * -1;
    
    rStr = str[i];

    console.log(str[m], rStr);
    // str[m] are the letters in the same order as original string
    if(str[m] !== rStr){
       flag = 0;
    }
}

if(flag == 1){
    console.log('Palindrome');
}
else{
    console.log('Not a Palindrome');
}