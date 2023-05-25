const express = require("express");
const app = express();

app.get("/sticker", function (req, res) {
  const currentDate = new Date();
  //   res.send(currentDate.toString());

  const url = msg.body.substring(msg.body.indexOf(" ")).trim();
  res.json(`${currentDate}\n\n ${url}`);
});

app.listen(3000, function () {
  console.log("Tá no ar na porta 3000");
});
