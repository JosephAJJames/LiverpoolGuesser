const express = require("express");
const db_setup = require("./db_setup");

const app = express();

app.listen(8000, () => {
    db_setup();
});