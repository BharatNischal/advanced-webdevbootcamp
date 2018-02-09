//ASYNC ... AWAIT

async function getMovieData() {
    console.log('starting!');
    var movieData = await $.getJSON('https://omdbapi.com?t=braveheart&apikey=thewdb');
    console.log('all done!');
    console.log(movieData);
}

async function getGithubUser(user) {
    try {
        var response = await $.getJSON(`https://api.github.com/users/${user}`);
        console.log(response.name);
    } catch (e) {
        console.log('User does not exist!');
    }
}

async function getMovieData(){
    var titanicPromise = $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
    var shrekPromise = $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');

    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
}

async function getMovieData(first, second){
    var movieList = await Promise.all([
        $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
    ]);
    console.log(movieList[0]);
    console.log(movieList[1]);
}


async function hasMostFollowers(...users) {
    const baseUrl = 'https://api.github.com/users/';
    const urls = users.map(user => $.getJSON(baseUrl + user));
    const results = await Promise.all(urls);
    const moreFollowers = results.sort((a, b) => a.followers < b.followers)[0];
    return `${moreFollowers.name} has the most followers with ${moreFollowers.followers}`;
}

async function starWarsString(num){
    const char = await $.getJSON(`https://swapi.co/api/people/${num}/`);
    const movie = await $.getJSON(char.films[0]);
    const planet = await $.getJSON(movie.planets[0]);

    console.log(`${char.name} is featured in ${movie.title}, directed by ${movie.director} and it takes place on ${planet.name}`);
}

