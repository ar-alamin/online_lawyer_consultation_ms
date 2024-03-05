import Chat from "../models/ChatSchema.js";
import express from "express";

const router = express.Router();

// API routes
router.get('/chats/:user', async (req, res) => {
    const user = req.params.user;
  
    // Find distinct sender and recipient names for the given user
    const senders = await Chat.distinct('sender', { recipient: user });
    const recipients = await Chat.distinct('recipient', { sender: user });
  
    // Combine and deduplicate sender and recipient names
    const participants = Array.from(new Set([...senders, ...recipients]));
    res.json(participants);
    
});
  
router.get('/chats/:user1/:user2', async (req, res) => {
    const user1 = req.params.user1;
    const user2 = req.params.user2;
    const chats = await Chat.find({
      $or: [
        { sender: user1, recipient: user2 },
        { sender: user2, recipient: user1 },
      ],
    });
    res.json(chats);
});
  
router.post('/send-message', async (req, res) => {
    const { sender, recipient, message } = req.body;
    const newChat = new Chat({ sender, recipient, message });
    await newChat.save();
    res.json(newChat);
});

export default router;