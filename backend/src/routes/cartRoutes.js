const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.get("/", cartController.getCart);
router.post("/", cartController.addToCart);

module.exports = router;