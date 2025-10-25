const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controller/productController");

const upload = multer({ dest: "./public/images/" });

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", upload.single("image"), productController.createProduct);

module.exports = router;
