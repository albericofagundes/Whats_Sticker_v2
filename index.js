const express = require("express");
const app = express();

app.use(express.json());

app.get("/sticker", async function (req, res) {
  try {
    const currentDate = new Date();
    const url = req.body.url;

    // Aqui você pode adicionar o código adicional que precisa ser executado com async-await

    res.json({
      currentDate: currentDate,
      url: url,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, function () {
  console.log("Tá no ar na porta 3000");
});
