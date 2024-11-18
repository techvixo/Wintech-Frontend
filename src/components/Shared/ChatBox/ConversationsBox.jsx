import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";

const ConversationsBox = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("Message:", message); // This is where you can send the message (e.g., to an API or chat system)
            setMessage(""); // Clear the message after sending
        } else {
            alert("Please write a message before sending.");
        }
    };
    const data = [
        {
            id: 1,
            role: "user",
            des: "I want to create a website",
            name: "",
            time: "12:03"
        },
        {
            id: 1,
            role: "admin",
            des: "Hi! I am Kodee, Hostinger AI sales expert 🤖. How can I help you today?",
            name: "",
            time: "12:03"
        },
        {
            id: 1,
            role: "user",
            des: "That's great! To help you better, could you please tell me what type of website you are planning to create?",
            name: "",
            time: "12:03"
        },
        {
            id: 1,
            role: "admin",
            des: "Is it a blog, an online store, a portfolio, or something else?",
            name: "",
            time: "12:03"
        },
        {
            id: 1,
            role: "admin",
            des: "Is it a blog, an online store, a portfolio, or something else?",
            name: "",
            time: "12:03"
        },
        {
            id: 1,
            role: "admin",
            des: "Is it a blog, an online store, a portfolio, or something else?",
            name: "",
            time: "12:03"
        },
    ]
    return (
        <div id='conversations_box' className="relative">
            <div className="conversations">
                <div className="message_show flex flex-col gap-1">
                    {
                        data.map((message, i) => {
                            return (
                                <div key={i} className={`message_card flex gap-1 p-2 rounded-sm ${message?.role == "user" && "bg-gray-200"}`}>
                                    <p className=" pt-2">
                                        {
                                            message?.role == "user" ? <span className="text-lg text-gray-600 font-semibold"><FaRegUser /></span>
                                                :
                                                <span className="text-lg text-blue-400 font-semibold"><FaUserShield /></span>

                                        }

                                    </p>
                                    <p className="text-sm">{message?.des}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Write Message here  */}
            <div className="send_message_box relative w-full overflow-hidden">
                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Write message..."
                    className="input input-sm w-full"
                />
                <button
                    onClick={handleSendMessage}
                    id='send_message_button'
                    type='button'
                    className='absolute right-[1px] h-[96%] top-[1px] text-xl text-secondary font-semibold px-2 bg-gray-200 rounded-lg shadow'
                >
                    <IoSend />
                </button>
            </div>
        </div>
    );
};

export default ConversationsBox;
