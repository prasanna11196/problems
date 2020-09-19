let str = ['a','b','c','d'];
let rstr = [];

for(i = str.length - 1; i >= 0; i--){
    rstr[str.length -1 - i] = str[i];
}
console.log(rstr);