const width = 600;
const height = 600;
const barPadding = 1;
const padding = 20;
const minYear = d3.min(birthData, d => d.year);
const maxYear = d3.max(birthData, d => d.year);
let yearData = birthData.filter(d => d.year === minYear);

let xScale = d3.scaleLinear()
                 .domain([0, d3.max(yearData, d => d.births)])
                 .rangeRound([padding, width - padding]);

let histogram = d3.histogram()
                    .domain(xScale.domain())
                    .thresholds(xScale.ticks())
                    .value(d => d.births);
let bins = histogram(yearData);

let yScale = d3.scaleLinear()
                 .domain([0, d3.max(bins, d => d.length)])
                 .range([height, 0]);

let bars = d3.select('svg')
                    .attr('width', width)
                    .attr('height', height)
                .selectAll('.bar')
                .data(bins)
                .enter()
                .append('g')
                    .classed('bar', true);

bars
    .append('rect')
        .attr('x', (d,i) => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('height', d => height - yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - barPadding)
        .attr('fill', 'green');

bars
    .append("text")
    .text(d => d.x0 + " - " + d.x1 + " (bar height: " + d.length + ")")
    .attr("transform", "rotate(-90)")
    .attr("y", d => (xScale(d.x1) + xScale(d.x0)) / 2)
    .attr("x", - height + 10)
    .style("alignment-baseline", "middle");

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', function() {
        let year = +d3.event.target.value;
        //begin of the UPDATE PATTERN
        yearData = birthData.filter(d => d.year === year);
        xScale.domain([0, d3.max([yearData, d => d.births])]);
        histogram.domain(xScale.domain())
                 .thresholds(xScale.ticks());
        bins = histogram(yearData);
        yScale.domain([0, d3.max(bins, d => d.length)]);

        bars = d3.select('svg')
                    .selectAll('bar')
                    .data(bins);
        bars
            .exit()
            .remove();
        
        const g = bars.enter().append('g')
                                .classed('bar', true);
        g.append('rect');
        g.append('text');

        g.merge(bars)
            .select('rect')
            .attr('x', (d,i) => {
                console.log(xScale(d.x0));
                return xScale(d.x0)
            })
            .attr('y', d => yScale(d.length))
            .attr('height', d => height - yScale(d.length))
            .attr('width', d => xScale(d.x1) - xScale(d.x0) - barPadding)
            .attr('fill', 'green');

        g.merge(bars)
            .select('text')
            .text(d => d.x0 + " - " + d.x1 + " (bar height: " + d.length + ")")
            .attr("transform", "rotate(-90)")
            .attr("y", d => (xScale(d.x1) + xScale(d.x0)) / 2)
            .attr("x", - height + 10)
            .style("alignment-baseline", "middle");
    
});