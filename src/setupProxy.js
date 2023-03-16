// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://3.37.150.96",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "", // /api에 해당하는 url을 없애기
//       },
//     })
//   );
// };

// app.listen(5500);