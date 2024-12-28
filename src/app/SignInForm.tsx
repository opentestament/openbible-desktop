import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa"

export function SignInForm() {

    return (
        <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-800">LOG IN</h2>
                <p className="text-amber-600 mt-2">"For where two or three gather in my name, there I am with them" - Matthew 18:20</p>
            </div>
            <form className="space-y-4">
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-800">Email</label>
                <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-amber-300 rounded-md text-sm shadow-sm placeholder-amber-400
                            focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
                </div>
                <button 
                type="submit" 
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                Sign In with Email
                </button>
            </form>
            <div className="mt-6">
                <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-amber-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-amber-600">Or sign in with</span>
                </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                    className="w-full inline-flex justify-center py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-800 hover:bg-amber-100"
                >
                    <FaGoogle className="w-5 h-5"/>
                </button>
                <button
                    className="w-full inline-flex justify-center py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-800 hover:bg-amber-100"
                >
                    <FaFacebook className="w-5 h-5" />
                </button>
                <button
                    className="w-full inline-flex justify-center py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-800 hover:bg-amber-100"
                >
                    <FaApple className="w-5 h-5" />
                </button>
                </div>
            </div>
            <p className="mt-8 text-center text-sm text-amber-600">
                Don't have an account? Sign Up
            </p>
            </div>
        </div>
    )

}