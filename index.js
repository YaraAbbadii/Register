const express = require("express");
const app = express();
const PORT = 3030;
const registerRouter = require("./router/registerRouter");
const GETregister = require("./router/registerRouter");

app.use(express.json());

app.use(express());
app.use(registerRouter);
app.use(GETregister);
app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});
