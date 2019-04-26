const express = require("express");
const app = express();
const port = 3000;
const tvshows = require("./tvshows");

app.get("/rest/tvshows", (req, res) => res.send(tvshows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
