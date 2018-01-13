const myArr = [1,2,3,4,5];
//this is not the forEach() method, this is an implementation of its similar function
//it is a function with two parameters, one of which is a callback function
function forEach(arr, callback) {
    //it loops over the array
    for (let i = 0; i < arr.length; i++) {
        //and on each elements it applies a callback with its three parameters:
        //current value, index and array itself
        callback(arr[i], i, arr);    
    }
};

//here the callback function with three parameters 
function myCallBack (currentElement, currentIndex, array) {
    //it will return and log current index, current element and array itself
    console.log(`${currentIndex}: ${currentElement} of ${array}`);
}

console.log(forEach(myArr, myCallBack));