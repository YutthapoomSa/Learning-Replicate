require("dotenv").config();
const express = require("express");
const { insertController } = require("./controllers/insertController");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/"),
  async (req, res) => {
    try {
      const message = `NEER CODE CO., LTD.`;
      return res.json({ message });
    } catch (error) {
      console.log(`message error: `, error);
    }
  };

app.post("/api/insert", insertController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
