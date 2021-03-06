const express = require("express");
const tourRouter = require("./11_toureRoute");
const userRouter = require("./11_userRoute");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json()); // for post requrest , accessing req.body

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 80;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
