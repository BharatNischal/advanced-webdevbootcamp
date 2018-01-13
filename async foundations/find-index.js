//this is not findIndex method, but the implementation of a similar function
function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}


//this is the way findIndex method works
const a = [1,2,3,4,5];
const b = a.findIndex(item => item === 3);
const c = a.findIndex(item => item === 7);
console.log(b);
console.log(c);
