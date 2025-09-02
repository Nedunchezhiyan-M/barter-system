
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPage from './components/MainPage';
import { USERS } from './constants';
import type { User } from './types';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [view, setView] = useState<'login' | 'signup'>('login');
    const [users, setUsers] = useState<User[]>(USERS);

    const handleLogin = useCallback((email: string, password: string): boolean => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setCurrentUser(user);
            return true;
        }
        return false;
    }, [users]);

    const handleLogout = useCallback(() => {
        setCurrentUser(null);
        setView('login');
    }, []);

    const handleSignup = useCallback((username: string, email: string, password: string): boolean => {
        if (users.some(u => u.username === username || u.email === email)) {
            return false; // Username or email already exists
        }
        const newUser: User = {
            id: users.length + 1,
            username,
            email,
            password,
            credits: 50, // Starting credits for new users
            avatar: `https://picsum.photos/seed/${username}/100/100`,
        };
        setUsers(prevUsers => [...prevUsers, newUser]);
        setView('login');
        return true;
    }, [users]);


    if (!currentUser) {
        switch (view) {
            case 'signup':
                return <SignupPage onSignup={handleSignup} onNavigateToLogin={() => setView('login')} />;
            case 'login':
            default:
                return <LoginPage onLogin={handleLogin} onNavigateToSignup={() => setView('signup')} />;
        }
    }

    return <MainPage user={currentUser} onSignOut={handleLogout} />;
};

export default App;
