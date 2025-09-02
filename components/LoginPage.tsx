
import React, { useState } from 'react';
import { Logo } from './Logo';

interface LoginPageProps {
    onLogin: (email: string, password: string) => boolean;
    onNavigateToSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigateToSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!onLogin(email, password)) {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="min-h-screen flex">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-8">
                <div className="w-full max-w-sm">
                    <div className="mb-8 flex justify-center">
                       <Logo className="h-12 w-auto text-indigo-600"/>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-center text-gray-500 mb-8">Sign in to continue to BarterStreet</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        
                        <div className="text-center">
                             <button
                                type="button"
                                onClick={onNavigateToSignup}
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                            >
                                New User? Create an account
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src="assests\login.png"
                    alt="Two hands exchanging goods, representing a traditional barter system"
                />
            </div>
        </div>
    );
};

export default LoginPage;
