//PROMISES: a one time guaranteed return of some future value

function displayAtRandomTime() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(Math.random() > .5) {
                resolve('Yes!')
            } else {
                reject('No!');
            }
        }, 1000);
    });
}

displayAtRandomTime()
.then(value => console.log(value))
.catch(err => console.log(err));


function display(){
    return new Promise(function(res, rej) {
        setTimeout(() => {
            if(Math.random() < .3) {
                res('Opla!');
            } else {
                rej('fuck!');
            }
        }, 2000);
    });
}
display()
.then(v => console.log(v))
.catch(e => console.log(e))

//fetch() it is an example of using Promises...
fetch('https://omdbapi.com?t=titanic&apikey=thewdb')
.then(res => res.json())
.then(movie => console.log(movie.Year))
.catch(err => console.log(err));

