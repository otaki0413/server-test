// ログ出力用ミドルウェア
exports.logMiddleWare = (req, res, next) => {
  console.log(Date.now(), req.method, req.url);
  next();
};

// エラー用ミドルウェア
exports.errorMiddleWare = (req, res, next) => {
  next(new Error("ミドルウェアからのエラー"));
};
