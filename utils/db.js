require("dotenv").config();
const { MongoClient } = require("mongodb");

const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

async function connectMongo() {
  const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000, // 60-second timeout
  };
  const client = new MongoClient(mongoUrl, mongoOptions);
  await client.connect();
  const db = client.db(dbName);
  return { db };
}

module.exports = { connectMongo };
