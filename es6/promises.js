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


//PROMISE ALL
function getMovie(title) {
    //we use JQuery to fetch data from OMDB ...
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}
var braveheartPromise = getMovie('braveheart');
var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');

Promise.all([braveheartPromise, titanicPromise, shrekPromise])
.then(movies => movies.forEach(value => console.log(value.Year)));

//EXERCISES
function getMostFollowers(...usernames) {
    let baseUrl = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls)
    .then(data => {
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`;
    });
}

getMostFollowers('elie', 'tigarcia', 'colt').then(function (data) {
    console.log(data)
});

function starWarsString(num) {
    return $.getJSON(`https://swapi.co/api/people/${num}/`);
}

starWarsString(2)
.then(data => console.log(data));

