const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {res.json({message: `Hi there from Express!`})});

app.listen(PORT, () => {console.log(`Server is running on PORT: ${PORT}`)});