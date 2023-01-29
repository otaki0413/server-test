const express = require("express");
const app = express();

// GET / アクセス時の挙動
app.get("/", (req, res) => {
  res.status(200).send("hello world\n");
});

// GET /user/:id アクセス時の挙動
app.get("/user/:id", (req, res) => {
  res.status(200).send(req.params.id);
});

// 3001番でサーバー起動
app.listen(3001, () => {
  console.log("start listening");
});
