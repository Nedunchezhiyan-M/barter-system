
import React from 'react';
import type { User } from '../types';
import { Logo } from './Logo';

interface SidebarProps {
    user: User;
    onSignOut: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, onSignOut }) => {
    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 shadow-lg">
            <div className="mb-10 flex items-center gap-2 px-2">
                <Logo className="h-8 w-auto text-indigo-400" />
                <span className="text-xl font-bold">BarterStreet</span>
            </div>

            <div className="flex items-center gap-4 mb-6 px-2">
                <img src={user.avatar} alt="User avatar" className="w-12 h-12 rounded-full border-2 border-indigo-400" />
                <div>
                    <p className="font-semibold text-lg">{user.username}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                </div>
            </div>

            <div className="px-2 mb-8">
                <p className="text-sm text-gray-400 mb-1">Credits</p>
                <div className="bg-gray-700 rounded-lg p-3">
                    <span className="text-2xl font-bold text-indigo-400">{user.credits}</span>
                    <span className="text-sm text-gray-300 ml-2">CRD</span>
                </div>
            </div>
            
            <div className="mt-auto">
                <button
                    onClick={onSignOut}
                    className="w-full flex items-center justify-center gap-2 text-left px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    Sign Out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
