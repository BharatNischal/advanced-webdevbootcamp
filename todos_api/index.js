const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {res.send(`HELLO FROM ROOT ROUTE!`)});

app.use('/api/todos', todoRoutes);
/***********************************************************************/
            /*********************SERVER*****************************/
/***********************************************************************/
app.listen(PORT, () => {console.log(`Server is running on PORT: ${PORT}`)});

//sudo service mongodb start: this is the command line to start mongodb on ubuntu
//sudo service mongodb stop: this is the command line to stop mongodb on ubuntu