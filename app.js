const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const curdHandler = require("./Router/curdRouter/curdHandler");

// database connection with mongoose
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/curd", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect success ");
  })
  .catch((err) => {
    console.log(err);
  });

// application route
app.use("/curd", curdHandler);

// default error handler

function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(4000, () => {
  console.log("surver run success ");
});

