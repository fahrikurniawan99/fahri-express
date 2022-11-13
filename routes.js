const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/product", (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.json({
      status: "success",
      id: 1,
      name,
    });
  }
  res.json({
    message: "query of product name undefined",
  });
});

module.exports = router;
