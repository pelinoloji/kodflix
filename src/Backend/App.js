const express = require("express"); //must
const app = express(); //initial variable
const port = process.env.PORT || 3001;
const shows = require("./shows");
const path = require('path');


app.get("/rest/shows", (req, res) => res.send(shows())); //go to a page, its a get requires, route

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

