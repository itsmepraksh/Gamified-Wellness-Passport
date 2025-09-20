 
const RegisterCard = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 transform md:translate-y-6">
      <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
        Register
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>
        <button
          type="button"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-6 text-center">
        Already have an account?{" "}
        <a href="#" className="text-purple-600 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
};

export default RegisterCard;
