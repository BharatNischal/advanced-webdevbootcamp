var quotes = [
    {
        quote: "I see dead people.",
        movie: "The Sixth Sense",
        year: 1999,
        rating: "PG-13"
    }, {
        quote: "May the force be with you.",
        movie: "Star Wars: Episode IV - A New Hope",
        year: 1977,
        rating: "PG"
    }, {
        quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
        movie: "Dirty Harry",
        year: 1971,
        rating: "R"
    }, {
        quote: "You had me at 'hello.'",
        movie: "Jerry Maguire",
        year: 1996,
        rating: "R"
    }, {
        quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
        movie: "Finding Nemo",
        year: 2003,
        rating: "G"
    }
];
var newQuotes = [
    {
        quote: "Houston, we have a problem.",
        movie: "Apollo 13",
        year: 1995,
        rating: "PG-13"
    }, {
        quote: "Do or do not, there is no try.",
        movie: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
        rating: "PG"
    }
];

const colors = {
    'G': 'green',
    'PG': 'blue',
    'PG-13': 'red',
    'R': 'orange'
}

addMovies();

//D3 way to remove items
//EXIT SELECTIONS
const removeBtn = d3.select('#remove');

removeBtn.on('click', function() {
    const nonRQuotes = quotes.filter(movie => movie.rating !== 'R');
    d3.selectAll('li')
        .data(nonRQuotes, d => d.quote)
        .exit()
        .remove();
    removeBtn.remove();
});

const addBtn = d3.select('#add');

addBtn.on('click', function() {
    quotes = quotes.concat(newQuotes);

    addMovies();
    addBtn.remove();
});

function addMovies() {
    d3.select('.quotes')
        .style('list-style', 'none')
    .selectAll('li') //select the "future" li in the ul
        .data(quotes) //use D3 data() method and pass it an array of quotes that creates ENTER NODES
        .enter() // create a D3 selections with the above ENTER NODES
        .append('li') //and append them on the PAGE as list items
            .text(d => `"${d.quote}" - ${d.movie} (${d.year})`) //first parameter in D3 callback functions ALWAYS refers to data, second is the index
            .style('margin', '10px')
            .style('padding', '10px')
            .style('font-size', '16px')
            .style('background-color', d => colors[d.rating])
            .style('border-radius', '8px');
}



