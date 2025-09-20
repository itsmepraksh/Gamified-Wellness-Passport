import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faMeh, faFrown, faAngry, faGrinStars } from "@fortawesome/free-solid-svg-icons";


const MoodTracker = () => {
  return (
     <div className="flex-1 px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          How are you feeling today? 🌈
        </h2>

        {/* Emoji Mood Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition cursor-pointer">
            <FontAwesomeIcon icon={faSmile} className="text-4xl text-yellow-500 mb-2" />
            <p className="font-medium text-gray-700">Happy</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition cursor-pointer">
            <FontAwesomeIcon icon={faMeh} className="text-4xl text-gray-500 mb-2" />
            <p className="font-medium text-gray-700">Okay</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition cursor-pointer">
            <FontAwesomeIcon icon={faFrown} className="text-4xl text-blue-500 mb-2" />
            <p className="font-medium text-gray-700">Sad</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition cursor-pointer">
            <FontAwesomeIcon icon={faAngry} className="text-4xl text-red-500 mb-2" />
            <p className="font-medium text-gray-700">Angry</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition cursor-pointer">
            <FontAwesomeIcon icon={faGrinStars} className="text-4xl text-green-500 mb-2" />
            <p className="font-medium text-gray-700">Excited</p>
          </div>
        </div>

        {/* Streak / Graph Placeholder */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Mood Streak 📊</h3>
          <div className="h-40 flex items-center justify-center text-gray-400">
            (Mood Graph / Streak Chart will appear here)
          </div>
        </div>
      </div>
  )
}

export default MoodTracker