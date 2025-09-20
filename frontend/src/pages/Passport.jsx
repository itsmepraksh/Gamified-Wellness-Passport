import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faStar, faMedal, faFire } from "@fortawesome/free-solid-svg-icons";


const Passport = () => {
  return (
      <div className="flex-1 px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Your Wellness Passport 🏆
        </h2>

        {/* Streak Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto mb-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Streak 🔥</h3>
          <p className="text-lg text-gray-600">You’ve maintained your streak for</p>
          <p className="text-4xl font-bold text-blue-600 mt-2">5 Days</p>
        </div>

        {/* Badges Section */}
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Unlocked Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500 mb-2" />
            <p className="font-medium text-gray-700">First Step</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <FontAwesomeIcon icon={faStar} className="text-4xl text-blue-500 mb-2" />
            <p className="font-medium text-gray-700">Consistency</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <FontAwesomeIcon icon={faMedal} className="text-4xl text-green-500 mb-2" />
            <p className="font-medium text-gray-700">Wellness Champ</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <FontAwesomeIcon icon={faFire} className="text-4xl text-red-500 mb-2" />
            <p className="font-medium text-gray-700">Streak Master</p>
          </div>
        </div>

        {/* Upcoming Challenges */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Challenges 🎯</h3>
          <ul className="space-y-3 text-gray-600">
            <li>💧 Drink 2L of water daily for 7 days</li>
            <li>🧘 10 minutes meditation streak</li>
            <li>📖 Journaling 5 days in a row</li>
          </ul>
        </div>
      </div>
  )
}

export default Passport