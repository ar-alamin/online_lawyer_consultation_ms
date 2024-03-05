import express from "express";
import { authenticate, restrict } from "./../auth/verifyToken.js";
import { getCheckoutSession } from "../controllers/bookingController.js";

const router = express.Router();

router.post(
  "/checkout-session/:lawyerId",
  authenticate,
  restrict(["patient"]),
  getCheckoutSession
);

export default router;
