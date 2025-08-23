import { User } from "../db/models/user.models.js";
import jwt from "jsonwebtoken";

// helper function to generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d", // token valid for 7 days
  });
};

// signup function to register user
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ email, password });
    await user.save();

    const token = generateToken(user._id);
    res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
      })
      .json({
        message: "User created successfully",
        user: { id: user._id, email: user.email },
      });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

// login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.isPasswodCorrect(password); // make sure spelling matches your model
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 365 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Login successful",
        user: { id: user._id, email: user.email },
      });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// logout function
const logout = async (req, res) => {
  try {
    // just clear the cookie, no need to fetch user or token
    res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};

export { signup, login, logout };
