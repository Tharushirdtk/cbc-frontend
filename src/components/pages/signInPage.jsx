import { Link } from "react-router-dom";

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">Sign In</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your username" 
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Sign In
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600">
                    New here? <Link to="/register" className="text-blue-500 hover:underline">Create an account</Link>
                </p>
            </div>
        </div>
    );
}
