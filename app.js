const express = require("express");
const port = 3000;

const app = express();

const db = require("../db");

app.use(express.json());

const customersRouter = require('./show')

app.use("/customers", customersRouter);

app.listen(port, () =>
console.log(`Server running at http://localhost:${port}`)
);