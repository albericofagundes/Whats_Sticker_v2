const { Client, MessageMedia } = require("whatsapp-web.js");
const express = require("express");
const app = express();
const axios = require("axios");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");

app.use(express.json());

app.get("/sticker", async function (req, res) {
  try {
    const url = req.body.url;

    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = await createSticker(data, {
      pack: "My Pack",
      author: "Alberico Fagundes",
      type: StickerTypes.FULL,
      id: "12345",
      quality: 50,
      background: "#000000",
    });
    console.log("buffer", buffer);

    res.setHeader("Content-Type", "image/webp");
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, function () {
  console.log("Tá no ar na porta 3000");
});
