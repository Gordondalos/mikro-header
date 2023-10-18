module.exports = {
  "/api": {
    "target": "https://sitweb.iiko.it/",
    "secure": false,
    "changeOrigin": true,
    "onProxyRes": res => {
      if (res.headers['set-cookie']) {
        res.headers['set-cookie'] = res.headers['set-cookie'].map(cookie =>
          cookie.replace(/;(\ )*secure/gi, '')
        );
      }
    },
  },
  "/images/menu": {
    "target": "https://sitweb.iiko.it/",
    "secure": false,
    "changeOrigin": true
  },
};
