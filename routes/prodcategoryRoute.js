const express = require("express");
const {createCategory} = require("../controller/prodcategoryCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
// router.put("/:id", authMiddleware, isAdmin, updateCategory);
// router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
// router.get("/:id", getCategory);
// router.get("/", getallCategory);

module.exports = router;