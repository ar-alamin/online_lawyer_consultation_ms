import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Chat = () => {
  let { user1, user2 } = useParams();
  const [chats, setChats] = useState([]);
  const [userChatedWith, setUserChatedWith] = useState([]);
  const [message, setMessage] = useState("");
  const chatboxRef = React.createRef(); // Create a ref for the chatbox container
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch chats between the sender and receiver
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/chats/${user1}/${user2}`
        );
        setChats(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };
    // Initial fetch
    fetchChats();

    // Poll every 2 seconds (adjust as needed)
    const pollInterval = setInterval(fetchChats, 1000);

    // Cleanup function to stop polling when the component is unmounted
    return () => {
      clearInterval(pollInterval);
    };
  }, [user1, user2]);

  useEffect(() => {
    // Scroll to the bottom of the chatbox whenever messages change
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [chats]);

  useEffect(() => {
    // Fetch chats between the sender and receiver
    const fetchChatedWith = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/chats/${user1}`
        );
        console.log(response.data);
        setUserChatedWith(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };
    // Initial fetch
    fetchChatedWith();
  }, [user1]);

  const handleSendMessage = async () => {
    try {
      // Send a new message
      await axios.post("http://localhost:5000/api/send-message", {
        sender: user1,
        recipient: user2,
        message,
      });

      // After sending, fetch updated chats
      const response = await axios.get(
        `http://localhost:5000/api/chats/${user1}/${user2}`
      );
      setChats(response.data);

      // Clear the message input
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleNewChatUser = (user) => {
    navigate(`/chat/${user1}/${user}`);
  };

  return (
    <div className="flex h-screen">
      {/* Chat List */}
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-scroll">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        <ul>
          {userChatedWith.map((user) => (
            <li
              key={user}
              className="mb-2 cursor-pointer  p-5 bg-white rounded-lg hover:bg-slate-200"
            >
              {/* Use Link or onClick to navigate to the chat with this user */}
              <p onClick={() => handleNewChatUser(user)}>{user}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Box */}
      <div className="w-3/4 p-4 bg-gray-100">
        <div className="flex justify-between items-center bg-green-300 p-4 ">
          <h2 className="text-lg font-bold">{`${user2}`}</h2>
        </div>

        {/* Make only the messages container scrollable */}
        <div
          className="flex flex-col overflow-y-scroll"
          style={{ height: "550px" }} // Set max width for the message container
          ref={chatboxRef}
        >
          {chats.map((chat) => (
            <div
              key={chat._id}
              className={`p-2 ${
                chat.sender === user1
                  ? "self-end bg-blue-500  mt-1 mb-1 border rounded-lg"
                  : "self-start bg-green-500 mt-1 mb-1 rounded-lg"
              }`}
              style={{ maxWidth: "80%" }} // Set max width for individual messages
            >
              <p className="text-white">{chat.message}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <textarea
            className="w-3/4 p-1 border rounded resize-none"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            disabled={message === ""}
            className="w-1/4 bg-blue-500 text-white px-4 py-4 rounded hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
