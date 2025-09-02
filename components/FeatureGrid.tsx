
import React from 'react';
import { FEATURES } from '../constants';
import type { Feature } from '../types';

interface FeatureGridProps {
    onSelectFeature: (feature: Feature) => void;
}

const FeatureCard: React.FC<{ feature: Feature; onClick: () => void }> = ({ feature, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
    >
        <div className="bg-indigo-100 p-4 rounded-full mb-4">
            <feature.icon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
    </div>
);


const FeatureGrid: React.FC<FeatureGridProps> = ({ onSelectFeature }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-500 mb-8">Explore the services you can trade on BarterStreet.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURES.map(feature => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                        onClick={() => onSelectFeature(feature)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeatureGrid;
