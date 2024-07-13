const express = require("express");
const db_setup = require("./db_setup");

const app = express();

app.get("/api", (req, res) => {
    console.log("api pinged");
});

app.listen(8000, () => {
    db_setup();
});