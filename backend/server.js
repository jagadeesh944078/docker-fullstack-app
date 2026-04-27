import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
const API_NAME = process.env.API_NAME || "My API";

app.get("/api/hello", (req, res) => {
  res.json({
    message: `Hello from ${API_NAME}`,
    environment: NODE_ENV,
  });
});

app.listen(PORT, () => {
  console.log(`${API_NAME} running on port ${PORT} in ${NODE_ENV} mode`);
});
