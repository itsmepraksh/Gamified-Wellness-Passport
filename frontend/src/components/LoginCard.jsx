import React from 'react'

const LoginCard = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 transform md:-translate-y-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Login</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Forgot your password? <a href="#" className="text-blue-600 hover:underline">Reset here</a>
          </p>
        </div>
  )
}

export default LoginCard