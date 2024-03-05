import jwt from "jsonwebtoken";
import LawyerSchema from "../models/LawyerSchema.js";
import UserSchema from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // Get token from header
  const authToken = req.headers.authorization;

  // Check if token exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token has expired" });
    }

    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const restrict = roles => async (req, res, next) => {
  const userId = req.userId;

  let user;
  // Check the user's role and retrieve from the appropriate collection
  const client = await UserSchema.findById(userId);
  const lawyer = await LawyerSchema.findById(userId);

  if (client) {
    user = client;
  } else if (lawyer) {
    user = lawyer;
  } else {
    return res.status(404).json({ message: "User not found" });
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized" });
  }

  next();
};

// Middleware to authenticate admin access
export const adminAuth = restrict(["admin"]);

// Middleware to restrict lawyer access
export const lawyerAuth = restrict(["lawyer"]);

// Middleware to restrict client access
export const clientAuth = restrict(["client", "admin"]);
