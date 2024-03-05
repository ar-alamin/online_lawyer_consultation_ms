import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Lawyer from "../models/LawyerSchema.js";

// generate token
const generateToken = user => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
};

export const registerUser = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body;

  try {
    // Check if user already exists
    let user = null;

    if (role === "client") {
      user = await User.findOne({ email });
    } else if (role === "lawyer") {
      user = await Lawyer.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create and save user based on the role
    if (role === "client") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    if (role === "lawyer") {
      user = new Lawyer({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "user successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error! Try again" });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;

  try {
    let user = null;

    // Check the user's role and retrieve from the appropriate collection
    const client = await User.findOne({ email });
    const lawyer = await Lawyer.findOne({ email });

    if (client) {
      user = client;
    } else if (lawyer) {
      user = lawyer;
    }

    // Check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    // check password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const { password, role, appointments, ...rest } = user._doc;

    // get token
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
