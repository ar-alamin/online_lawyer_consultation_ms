import {
  adminAuth,
  authenticate,
  lawyerAuth,
  restrict,
} from "../auth/verifyToken.js";
import {
  approveLawyer,
  deleteLawyer,
  getAllLawyers,
  getAllLawyer,
  getLawyerProfile,
  getSingleLawyer,
  updateLawyer,
} from "../controllers/lawyerController.js";
import express from "express";
// import { createReview } from "../controllers/reviewController.js";
import reviewRouter from "./review.js";

const router = express.Router();

router.use("/:lawyerId/reviews", reviewRouter);

// get all lawyers
router.get("/", getAllLawyer);
router.get("/all", getAllLawyers); // Assuming this is meant to get all doctors, not lawyers
router.put("/isApprove/:id", approveLawyer);
router.get("/:id", getSingleLawyer); // Assuming this is meant to get a single lawyer, not doctor
router.put("/:id", authenticate, lawyerAuth, updateLawyer); // Assuming this is meant to update a lawyer, not doctor
router.delete("/:id", deleteLawyer); // Assuming this is meant to delete a lawyer, not doctor
router.get("/profile/me", authenticate, restrict(["lawyer"]), getLawyerProfile);

export default router;
