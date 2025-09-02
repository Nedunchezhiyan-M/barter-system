
import React from 'react';
import type { Feature } from '../types';

interface FeatureViewProps {
    feature: Feature;
    onBack: () => void;
}

const FeatureView: React.FC<FeatureViewProps> = ({ feature, onBack }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="flex items-center gap-2 mb-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Dashboard
            </button>

            <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-indigo-100 p-5 rounded-full">
                    <feature.icon className="w-12 h-12 text-indigo-600" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{feature.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureView;
