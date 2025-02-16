const express = require('express')
const {
  findProduct,
  createProduct,
  findAllProduct,
  updateProduct,
  deleteProduct,
  productReview,
} = require("../controller/productController");
const {isAuthenticated} = require('../Middleware/authenticate')

const router = express.Router();
router.route("/product/:id").get(findProduct)
router.route("/products/create").post(createProduct)
router.route("/products").get(findAllProduct)
router.route("/products/update/:_id").put(updateProduct)
router.route("/products/delete/:_id").delete(deleteProduct)
router.route("/review").put(isAuthenticated, productReview )

module.exports = router;
// ###############################################3
// const express = require('express');
// const {
//   findProduct,
//   createProduct,
//   findAllProduct,
//   updateProduct,
//   deleteProduct,
//   productReview,
// } = require("../controller/productController");
// const { isAuthenticated } = require('../Middleware/authenticate');

// const router = express.Router();

// // Public Routes
// router.route("/products").get(findAllProduct);
// router.route("/product/:id").get(findProduct);

// // Protected Routes
// router.route("/products/create").post(isAuthenticated, createProduct);
// router.route("/products/update/:_id").put(isAuthenticated, updateProduct);
// router.route("/products/delete/:_id").delete(isAuthenticated, deleteProduct);
// router.route("/review").put(isAuthenticated, productReview);

// module.exports = router;