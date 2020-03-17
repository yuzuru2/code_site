export const constant = {
  // Bearer key
  AUTHORIZATION_KEY: 'Bearer abc',

  // オリジン
  URL: {
    development: ``,
    production: `http://${process.env.SERVER_IP}:${process.env.BACKEND_PORT}/api/v1`
  },

  LANG: [
    'html',
    'css',
    'javascript',
    'python',
    'php',
    'go',
    'java',
    'c',
    'rust',
    'perl',
    'bash',
    'swift',
    'ruby',
    'c++',
    'c#',
    'json',
    'sql',
    'yaml',
    'less',
    'scss',
    'typescript',
    'markdown',
    'kotlin',
    'plaintext'
  ]
};
