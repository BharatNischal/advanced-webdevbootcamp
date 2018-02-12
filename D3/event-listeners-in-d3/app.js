const input = d3.select('input');
const newNote = d3.select('#new-note');
const notes = d3.selectAll('.note');
const notesList = d3.select('#notes');
const removeNotes = d3.select('.remove');
const luckyNotes = d3.select('.lucky');
const preview = d3.select('.preview');

removeNotes
    .on('click', function () {
        d3.selectAll('.note')
            .remove();
});

luckyNotes.on('click', function() {
    notes
        .style('font-size', function() {
            return Math.random() * 100 + 'px';
        })
});

newNote.on('submit', function () {
    d3.event.preventDefault();
    notesList
        .append('p')
        .classed('note', true)
        .text(input.property('value'));
    input.property('value', '');
    setPreview('');
});

input.on('input', function(){
    const note = d3.event.target.value;
    setPreview(note);
});

function setPreview(val) {
    preview.text(val)
        .classed('hide', val === '');
}
