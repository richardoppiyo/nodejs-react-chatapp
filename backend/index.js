const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try {
  const r = await axios.post(
    'https://api.chatengine.io/users/',
    {username: username, first_name:username, secret: username },
    {headers: { 'PRIVATE-KEY': '296f6f57-f7a9-41eb-95f3-1b00a8ea63cb'}}
  );
  return res.status(r.status).json(r.data);
} catch (e) {
  return res.status(e.response.status).json(e.response.data);
}
  // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);