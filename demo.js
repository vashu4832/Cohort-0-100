//PS: Given an array, give me back a new array in which every value is multiplied by 2

const input = [1,2,3,4,5];

function transform(i){
    return i*2;
}

let ans = input.map(transform);
console.log(ans);