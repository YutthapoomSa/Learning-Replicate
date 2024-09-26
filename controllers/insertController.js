const { insert_data } = require("../services/insertService");

const insertController = async (req, res) => {
  try {
    const { name, age } = req.body;
    const data = { name, age };

    await insert_data(data);

    res.status(201).json("Data inserted successfully");
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json("Failed to insert data");
  }
};

module.exports = { insertController };