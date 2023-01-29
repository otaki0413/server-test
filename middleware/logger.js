exports.logMiddleWare = (req, res, next) => {
  console.log(Date.now(), req.method, req.url);
  next();
};
