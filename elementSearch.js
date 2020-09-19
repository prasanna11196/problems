let list = ['a', 'bat', 69, 'hehe'];
let flag = 0;
let search = 'bat';

for(i = 0; i < list.length; i++){
    if(search == list[i]){
        flag = 0;
        console.log('found');
        break;
    }
    else{
        flag = 1;
    }
}
if(flag == 1){
    console.log('Not found');
}