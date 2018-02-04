const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const todosRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`Jambo Jambo Buana!!`);
});

app.use('/api/todos', todosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});