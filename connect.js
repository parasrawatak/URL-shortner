const mongoose = require("mongoose");

//Strict query
mongoose.set("strictQuery", true);
async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
};
