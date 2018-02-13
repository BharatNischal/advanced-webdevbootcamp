const form = d3.select('form');
const input = d3.select('input');

form.on('submit', function(){
    d3.event.preventDefault();
    const text = input.property('value');
    //GENERAL UPDATE PATTERN
    //step 1: store the UPDATE SELECTION in a variable
    const letters = d3.select('#letters')
                        .selectAll('.letter')
                        .data(frequency(text), d => d.character);
    //step 2: using a "new" class, REMOVE all the div that must not be there
    letters
            .classed('new', false)
        .exit()
        .remove();
    //step 3: move on the ENTER and merge
    letters
        .enter()
        .append('div')
            .classed('letter', true)
            .classed('new', true)
        .merge(letters)
            .style('width', '20px')
            .style('line-height', '20px')
            .style('margin-right', '5px')
            .style('height', d => d.count * 20 + 'px')
            .text(d => d.character);

    d3.select('#phrase')
        .text(`Analysis of: ${text}`);
    d3.select('#count')
        .text(`(New Characters: ${letters.enter().nodes().length})`);

    input.property('value', '');
});

d3.select('#reset')
    .on('click', function(){
        d3.selectAll('.letter')
          .remove();
        d3.select('#phrase')
          .text('');
        d3.select('#count')
          .text('');
    });

//HELPERS
function frequency(str) {
    const sorted = str.split('').sort();
    const fr = sorted.reduce((acc, lett) => {
        if (!acc[lett]) {
            acc[lett] = 0;
        }
        acc[lett]++;
        return acc;
    }, {});
    const arr = [];
    for (var lett in fr) {
        arr.push({ character: lett, count: fr[lett] });
    }
    return arr;
}