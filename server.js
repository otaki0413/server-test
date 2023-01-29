const express = require("express");
const { logMiddleWare } = require("./middleware/logger");
const app = express();

// アプリケーション全体に設定
app.use(logMiddleWare);

// GET / アクセス時の挙動
app.get("/", logMiddleWare, (req, res) => {
  res.status(200).send("hello world\n");
});

// エラー用のルート
// app.get("/err", errorMiddleWare, (req, res) => {
//   console.log("errルート");
//   res.status(200).send("errルート");
// });

app.get("/err", (req, res) => {
  throw new Error("同期的なエラーです");
});

// 包括的エラーハンドリング
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

// 3002番でサーバー起動
app.listen(3002, () => {
  console.log("start listening");
});
