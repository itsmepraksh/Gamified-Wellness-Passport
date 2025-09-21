import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {useForm} from "react-hook-form"

const ChatBot = () => {

  const { register , reset , handleSubmit , formState:{errors}} = useForm()

  const [messages, setMessages] = useState([
    {
      role:"bot",
      content :" hii buddy, im your wellness bro, how are you feeling today?"
    }
  ])


  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setErrror] = useState(null)

  const chatHandler = async (data)=>{ 

    const userInp = data.message.trim()
    if(!userInp)return;

    const userMessage = {role:"user",content:userInp};
    setMessages((prev) => [...prev,userMessage]);
    reset();
    setLoading(true);
    setErrror(null);

    try {

      const response = await fetch("/api/chat",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({message : userInp}),
      });

      if(!response.ok) throw new Error("Server error");

      const data= await response.json();
      const botMessage = {role:"bot",content:data.reply};
      setMessages((prev)=>[...prev, botMessage])
      
    } catch (err) {
      console.error(err);
      setErrror("something went wrong")
    } finally {
      setLoading(false)
    }
  }

   return (
    <div className="flex-1 flex flex-col px-4 py-6 h-[70vh]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-white rounded-xl shadow-inner">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-md ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs md:max-w-md px-4 py-2 italic text-sm text-gray-500">
              Bot is typing...
            </div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
      </div>

      {/* Form Input with react-hook-form */}
      <form
        onSubmit={handleSubmit(chatHandler)}
        className="mt-4 flex items-center bg-white rounded-xl shadow-md px-4 py-2"
      >
        <input
          type="text"
          {...register("message", { required: true })}
          placeholder="Type your message..."
          className="flex-1 outline-none px-3 py-2 text-gray-700"
        />
        <button
          type="submit"
          className="ml-2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          disabled={loading}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>

      {errors.message && (
        <p className="text-sm text-red-500 mt-1">Message cannot be empty.</p>
      )}
    </div>
  );
}

export default ChatBot