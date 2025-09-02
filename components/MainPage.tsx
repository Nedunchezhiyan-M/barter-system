
import React, { useState } from 'react';
import type { User, Feature } from '../types';
import Sidebar from './Sidebar';
import FeatureGrid from './FeatureGrid';
import FeatureView from './FeatureView';

interface MainPageProps {
    user: User;
    onSignOut: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ user, onSignOut }) => {
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar user={user} onSignOut={onSignOut} />
            <main className="flex-1 p-6 md:p-10 transition-all duration-300">
                {selectedFeature ? (
                    <FeatureView feature={selectedFeature} onBack={() => setSelectedFeature(null)} />
                ) : (
                    <FeatureGrid onSelectFeature={setSelectedFeature} />
                )}
            </main>
        </div>
    );
};

export default MainPage;
