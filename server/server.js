const express = require("express");
const cors = require("cors");
const pool = require("./db");
const port = 3001
//===============================

const app = express();
//middleware
app.use(cors()); // will stop cors issues from server 3001 trying to communicate with client server 3000
app.use(express.json()); //req.body

//Routes
app.use("/api/todos", require("./routes/api/todos"))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
