import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e4ecff]">
      <div className="bg-white shadow-xl rounded-2xl flex max-w-4xl w-full overflow-hidden">
        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-[#cddcff]">
          <img
            src="/AuthImages/login.png"
            alt="illustration"
            className="w-80"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-1">Create Account</h2>
          <p className="text-gray-500 mb-6">Join and start your journey.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
