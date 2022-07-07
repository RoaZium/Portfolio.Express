var ip = require("ip");

module.exports = {
  API_URL: "http://" + ip.address() + ":48090/v2",
};
