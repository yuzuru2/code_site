export const constant = {
  // Bearer key
  AUTHORIZATION_KEY: 'Bearer abc',

  // オリジン
  ORIGIN: {
    development: ``,
    production: `http://${process.env.SERVER_IP}:${process.env.NGINX_PORT}`
  },

  // apiのバージョン
  API_VERSION: 'v1'
};
