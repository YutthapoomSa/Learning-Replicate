require("dotenv").config();
const { connectMongo } = require("../utils/db");

const collection_name = process.env.COLLECTION_NAME;
const db_name = process.env.DB_NAME;

async function insert_data(data) {
  const client = await connectMongo();
  const db = client.db(db_name);
  const collection = db.collection(collection_name);

  try {
    const result = await collection.insertOne(data);
    console.log("Data inserted successfully:", result.insertedId);
    return result;
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    client.close();
  }
}

module.exports = { insert_data };
