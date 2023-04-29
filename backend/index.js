// const express = require("express");
// const cors = require("cors");
// const axios = require('axios');

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
// try {
//   const r = await axios.post(
//     'https://api.chatengine.io/users/',
//     {username: username, first_name:username, secret: username },
//     {headers: { 'PRIVATE-KEY': '296f6f57-f7a9-41eb-95f3-1b00a8ea63cb'}}
//   );
//   return res.status(r.status).json(r.data);
// } catch (e) {
//   return res.status(e.response.status).json(e.response.data);
// }
//   // return res.json({ username: username, secret: "sha256..." });
// });

// app.listen(3001);

// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // console.log("Write user into DB.");
  // return res.json({ user: {} });

  // Store a user-copy on Chat Engine!
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": '296f6f57-f7a9-41eb-95f3-1b00a8ea63cb'} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // console.log("Fetch user from DB.");
  // return res.json({ user: {} });

  // Fetch this user from Chat Engine in this project!
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": '5870afd2-c6ef-4dd3-83cd-373bbb9fc6ea',
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// Docs at rest.chatengine.io
// vvv On port 3001!
app.listen(3001);