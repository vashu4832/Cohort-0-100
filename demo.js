//PS: Given an array, give me back a new array in which every value is multiplied by 2

const input = [1,2,3,4,5];

function transform(i){
    return i*2;
}

let ans = input.map(transform);
console.log(ans);

// What if I tell you, given an input array give me back all the even values from it

const arr = [1,2,3,4,5];

const newArr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);