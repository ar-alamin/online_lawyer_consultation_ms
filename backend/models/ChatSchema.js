import mongoose from "mongoose";

// Define schema for chat messages
const ChatSchema = new mongoose.Schema({
    sender: String,
    recipient: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
  });

export default mongoose.model("Chat", ChatSchema);
  