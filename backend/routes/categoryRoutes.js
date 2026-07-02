import express from "express";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(protect); // Apply the protect middleware to all routes in this router
router.get("/", getCategories);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;