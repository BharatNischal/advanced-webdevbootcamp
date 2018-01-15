//a Promise is an object that represents a task that will be completed in the future
//example with only the resolved status
const p1 = new Promise((resolve, reject) => {
    resolve([1,2,3,4]);
});

p1.then((data) => console.log('P1 resolved with data:', data));
//example with also the rejected status
const p2 = new Promise((resolve, reject) => {
    reject('ERROR');
});

p2.then((data) => console.log('P2 was resolved with data:', data))
  .catch((data) => console.log('P2 was rejected with data:', data));

//Promise with error handling and same possibilities for a resolve or reject status
const p3 = new Promise((resolve, reject) => {
    const num = Math.random();
    (num < 0.5) ? resolve(num) : reject(num);
});
p3.then(data => console.log(`Success: ${data}`))
  .catch(data => console.log(`Error: ${data}`));

//Promise with setTimeout
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomInteger = Math.floor(Math.random() * 10);
        resolve(randomInteger);
    }, 4000);
});
p4.then(data => console.log(`Random Integer passed to resolve: ${data}`));  

