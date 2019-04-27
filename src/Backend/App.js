const express = require("express"); //must
const app = express(); //initial variable
const port = 3001;
const shows = require("./shows");

app.get("/rest/shows", (req, res) => res.send(shows())); //go to a page, its a get requires, route

app.listen(port, () => console.log(`Server started on port ${port}`));
