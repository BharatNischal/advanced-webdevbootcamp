const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const todosRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.use('/api/todos', todosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});