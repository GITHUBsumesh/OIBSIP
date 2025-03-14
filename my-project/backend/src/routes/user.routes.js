import express from "express";
import {
  addOrder,
  addToCart,
  cancelOrder,
  createRazorpayOrder,
  deleteCart,
  getAllMyOrder,
  getCart,
  getInventory,
  updateCart,
  verifyRazorpayPayment,
} from "../controllers/user.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";
const router = express.Router();

// get inventory
router.get("/inventory", getInventory);

// cart
router
  .route("/cart")
  .get(authenticateUser, getCart)
  .post(authenticateUser, addToCart);
router
  .route("/cart/:id")
  .put(authenticateUser, updateCart)
  .delete(authenticateUser, deleteCart);

// order
router
  .route("/order")
  .get(authenticateUser, getAllMyOrder)
  .post(authenticateUser, addOrder);

router.post("/order/razorpay/create-order",createRazorpayOrder);
router.post("/order/razorpay/verify", verifyRazorpayPayment);

router.put("/order/:id", authenticateUser, cancelOrder);
export default router;
