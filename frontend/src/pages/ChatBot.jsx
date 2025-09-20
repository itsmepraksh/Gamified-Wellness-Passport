import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatBot = () => {
  return (
     <div className="flex-1 flex flex-col px-4 py-6">
        <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-white rounded-xl shadow-inner">
          {/* Bot Message */}
          <div className="flex justify-start">
            <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-md bg-gray-200 text-gray-800 rounded-bl-none">
              Hi 👋 I’m your Wellness Buddy. How are you feeling today?
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-md bg-blue-500 text-white rounded-br-none">
              I’m feeling a bit stressed 😟
            </div>
          </div>

          {/* Another Bot Message */}
          <div className="flex justify-start">
            <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-md bg-gray-200 text-gray-800 rounded-bl-none">
              I hear you 💙 Let’s try some breathing exercises together.
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="mt-4 flex items-center bg-white rounded-xl shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 outline-none px-3 py-2 text-gray-700"
          />
          <button className="ml-2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
  )
}

export default ChatBot