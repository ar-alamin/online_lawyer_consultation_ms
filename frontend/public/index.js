import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import lawyerRoute from "./routes/lawyer.js";
import reviewRoute from "./routes/review.js";
import bookingRoute from "./routes/booking.js";
import chatRoute from './routes/chat.js'
import { deleteUnapprovedLawyers } from "./controllers/lawyerController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("hello server");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/lawyers", lawyerRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);
app.use("/api", chatRoute);

app.listen(port, () => {
  connectDB();
  console.log("server listening on port" + port);
   // Schedule the job to run after 5 minutes
   setTimeout(async () => {
    console.log('Running delete Unapproved Lawyers job...');
    await deleteUnapprovedLawyers();
    console.log('delete Unapproved Lawyers job completed.');
  }, 10 * 60 * 1000); // 5 minutes in milliseconds
});
