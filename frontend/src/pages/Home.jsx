import videoSrc from "../assets/video/bg_video.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faSmile,
  faTrophy,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center"> 
      <video src={videoSrc}  autoPlay muted loop className=" h-[90vh] w-full object-cover "></video>
      {/* Hero Section */}
      <section className="absolute top-10 text-center py-20 px-6 ">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Your <span className="text-blue-600">Mind</span>,{" "}
          <span className="text-purple-600">Your Journey</span>,
          <br /> Your <span className="text-teal-600">Wellness</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Beat exam stress, track your mood, and unlock your mental superpower
          🚀 Start your wellness journey today with AI + gamification!
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 active:scale-[0.95] transition">
          Start Your Journey 🌟
        </button>
      </section>

      {/* Features Section */}
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FontAwesomeIcon
            icon={faComments}
            className="text-4xl text-blue-500 mb-4"
          />
          <h3 className="font-bold text-lg mb-2">AI Chatbot</h3>
          <p className="text-gray-600 text-sm">
            24/7 empathetic companion to talk about stress & anxiety.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FontAwesomeIcon
            icon={faSmile}
            className="text-4xl text-teal-500 mb-4"
          />
          <h3 className="font-bold text-lg mb-2">Mood Tracker</h3>
          <p className="text-gray-600 text-sm">
            Log your daily moods & get personalized coping tips.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FontAwesomeIcon
            icon={faTrophy}
            className="text-4xl text-purple-500 mb-4"
          />
          <h3 className="font-bold text-lg mb-2">Wellness Passport</h3>
          <p className="text-gray-600 text-sm">
            Earn badges, streaks & rewards for healthy habits.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FontAwesomeIcon
            icon={faMusic}
            className="text-4xl text-pink-500 mb-4"
          />
          <h3 className="font-bold text-lg mb-2">Mindfulness</h3>
          <p className="text-gray-600 text-sm">
            Relax with poems, meditation, and calming playlists.
          </p>
        </div>
      </section> 
    </div>
  );
};

export default Home;
