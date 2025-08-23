import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";
import userRoute from "./src/routes/user.route.js"

dotenv.config();

const app = express();

// ✅ Allowed Origins from .env (comma separated)
const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [];
// ✅ Setup CORS properly
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // if you want cookies to be sent
  })
);

// ✅ Middlewares
app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // for form data

// ✅ Routes
app.use("/api/v1/user", userRoute);

// ✅ Port
const PORT = process.env.PORT || 3000;

// ✅ Connect DB & Start server
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 App is running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ Error while connecting to MongoDB:", error.message);
    process.exit(1); 
  });
