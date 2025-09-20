import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEdit, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


const Profile = () => {
  return (
       <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* User Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
          <FontAwesomeIcon icon={faUserCircle} className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">john.doe@email.com</p>
          <p className="text-gray-500 text-sm mt-1">Wellness Enthusiast 🌱</p>

          {/* Edit Profile Button */}
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Crisis Helpline Card */}
        <div className="mt-10 bg-red-100 border border-red-300 rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold text-red-600 mb-3">Need Immediate Help?</h3>
          <p className="text-gray-700 mb-4">You are not alone. Call our 24/7 crisis helpline.</p>
          <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold shadow-md hover:bg-red-700 transition">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            Call Helpline
          </button>
        </div>
      </div>
  )
}

export default Profile