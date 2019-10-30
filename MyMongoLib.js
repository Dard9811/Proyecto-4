const MongoClient = require("mongodb").MongoClient;

const MyMongoLib = function() {
  const MyMongoLib = this || {};

  // Connection URL
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";

  // Database Name
  const dbName = "proyecto4";

  // Create a new MongoClient
  const client = new MongoClient(url);

  MyMongoLib.getDocs = () =>
    new Promise((resolve, reject) => {
      // Use connect method to connect to the Server
      client.connect(function(err, client) {
        if (err !== null) {
          reject(err);
          return;
        }
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const usuariosCol = db.collection("usuarios");
        return usuariosCol
          .find({})
          .limit(20)
          .toArray()
          .then(resolve);
      });
    });

  return MyMongoLib;
};

module.exports = MyMongoLib;
