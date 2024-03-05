import {
  adminAuth,
  clientAuth,
  authenticate,
  restrict,
} from "../auth/verifyToken.js";
import {
  deleteUser,
  getAllUser,
  getUserProfile,
  getSingleUser,
  updateUser,
  getMyAppointments,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

// get all users
router.get("/", getAllUser);
router.get("/:id", authenticate, clientAuth, getSingleUser);
router.put("/:id", authenticate, clientAuth, updateUser);
router.delete("/:id", deleteUser);

router.get("/profile/me", authenticate, restrict(["client"]), getUserProfile);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["client"]),
  getMyAppointments
);

export default router;
