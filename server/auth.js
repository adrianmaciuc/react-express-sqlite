function isAuth(token) {
  if (token == process.env.token) {
    return true;
  }
}

module.exports = { isAuth };
