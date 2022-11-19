const express = require('express');
const path = require('path');

const PORT = 3000 || process.PORT;

const app = express();

//set static folder path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

