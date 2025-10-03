import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  getCategories
} from "../controllers/expenseController.js";

const router = express.Router();

router.post("/expenses", createExpense);
router.get("/expenses", getExpenses);
router.get("/expenses/:id", getExpenseById);
router.put("/expenses/:id", updateExpense);
router.delete("/expenses/:id", deleteExpense);
router.get("/categories", getCategories);

export default router;
 
