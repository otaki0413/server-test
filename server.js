const express = require("express");
const { logMiddleWare } = require("./middleware/logger");
const app = express();

// アプリケーション全体に設定
app.use(logMiddleWare);

// エラー用ミドルウェア
const errorMiddleWare = (req, res, next) => {
  next(new Error("ミドルウェアからのエラー"));
};

// GET / アクセス時の挙動
app.get("/", logMiddleWare, (req, res) => {
  res.status(200).send("hello world\n");
});

// GET /user/:id アクセス時の挙動
app.get("/user/:id", logMiddleWare, (req, res) => {
  res.status(200).send(req.params.id);
});

// エラー用のルート
app.get("/err", errorMiddleWare, (req, res) => {
  console.log("errルート");
  res.status(200).send("errルート");
});

// 包括的エラーハンドリング（引数4つ）
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

// 3001番でサーバー起動
app.listen(3002, () => {
  console.log("start listening");
});
