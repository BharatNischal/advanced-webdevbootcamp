var width = 600;
var height = 600;
var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);

//let's create an array of continents starting from birthData
var continents = []; //["EU", "AF", "OC", "SA", "AS", "NA"]
for (let i = 0; i < birthData.length; i++) {
    var continent = birthData[i].continent;
    if(continents.indexOf(continent) === -1) {
        continents.push(continent);
    }
}

//d3.scaleOrdinal()
var colorScale = d3.scaleOrdinal()
                    .domain(continents)
                    .range(d3.schemeCategory10); //a color scheme directly from D3!
/*["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
"#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]*/
//colorScale('EU) === "#1f77b4" and so on

//CENTERING SVG
d3.select('svg')
        .attr('width', width)
        .attr('height', height)
    .append('g') //pie chart are usually built on a group
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .classed('chart', true);

//INPUT RANGE
d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', function(){return makeGraph(+d3.event.target.value)});

makeGraph(minYear);

//HELPERS
function makeGraph(year) {
    var yearData = birthData.filter(d => d.year === year);
    //d3.pie()
    var arcs = d3.pie() //this method return a function on which we must use .value()
                 .value(d => d.births) //set the pie on births data
                 (yearData);
    //d3.arc() converts js object into path commands
    var path = d3.arc()
                 .outerRadius(width / 2 - 10)
                 .innerRadius(width / 6);
    //GENERAL UPDATE PATTERN
    var update = d3.select('.chart')
                   .selectAll('.arc')
                   .data(arcs);
    //update exit() selection and remove useless data
    update
        .exit()
        .remove();
    //update enter() selection adding new data and giving each of them a class of arc
    update
          .enter()
          .append('path')
                .classed('arc', true)
            .merge(update)
                .attr('fill', d => colorScale(d.data.continent))
                .attr('stroke', 'black')
                .attr('d', path);
}




