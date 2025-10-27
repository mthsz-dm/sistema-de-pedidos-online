const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.get("/", cartController.getCart);
router.post("/", cartController.addToCart);
router.delete("/:id", cartController.deleteItem);
router.put("/:id", cartController.updateItem)
router.delete("/", cartController.deleteAllItems)

module.exports = router;