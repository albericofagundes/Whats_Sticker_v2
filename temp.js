// const { Client, MessageMedia } = require("whatsapp-web.js");
// const express = require("express");
// const app = express();
// const axios = require("axios");

// app.use(express.json());

// app.get("/sticker", async function (req, res) {
//   try {
//     const currentDate = new Date();
//     const url = req.body.url;
//     // const urlImg = url.substring(url.indexOf(" ")).trim();

//     const { data } = await axios.get(url, { responseType: "arraybuffer" });
//     const returnedB64 = Buffer.from(data).toString("base64");
//     const image = await new MessageMedia(
//       "image/jpeg",
//       returnedB64,
//       "image.jpg"
//     );
//     await client.sendMessage(sender, image, { sendMediaAsSticker: true });

//     console.log("req.body.url;\n", req.body.url);
//     console.log("urlImg\n", urlImg);

//     // Aqui você pode adicionar o código adicional que precisa ser executado com async-await

//     res.json({
//       currentDate: currentDate,
//       url: url,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3000, function () {
//   console.log("Tá no ar na porta 3000");
// });
