
import type { User, Feature } from './types';
import { InvestmentIcon, NetworkingIcon, CommunityIcon, ServicesIcon, MentalHealthIcon, FitnessIcon, ProductsIcon } from './components/icons/FeatureIcons';

export const USERS: User[] = [
    { id: 1, username: 'subi', password: '$ubi@2512', email: 'subi@gmail.com', credits: 96, avatar: 'https://picsum.photos/seed/subi/100/100' },
    { id: 2, username: 'surya', password: '$ury@1908', email: 'surya@gmail.com', credits: 96, avatar: 'https://picsum.photos/seed/surya/100/100' },
];

export const FEATURES: Feature[] = [
    {
        id: 'investment',
        title: 'Investment Features',
        description: 'BarterStreet facilitates skill-based investments. Instead of capital, use your expertise to gain equity in startups or collaborate on projects for future returns. It\'s a revolutionary way to build your portfolio by investing your most valuable asset: your time and talent.',
        icon: InvestmentIcon,
    },
    {
        id: 'networking',
        title: 'Professional Networking',
        description: 'Connect with a diverse community of professionals from various industries. On BarterStreet, networking goes beyond exchanging contact details. Here, you can immediately collaborate, trade services, and build meaningful professional relationships based on mutual benefit and shared expertise.',
        icon: NetworkingIcon,
    },
    {
        id: 'community',
        title: 'Community & Social Work',
        description: 'Give back to your community by bartering your skills for a cause. Connect with non-profits and social initiatives that need your help. BarterStreet provides a platform to contribute meaningfully, making social work accessible and impactful for everyone.',
        icon: CommunityIcon,
    },
    {
        id: 'services',
        title: 'Household & Personal Services',
        description: 'Need a leaky faucet fixed or a new logo for your blog? Find skilled individuals ready to trade services. From plumbing and graphic design to tutoring and event planning, our community offers a wide range of household and personal services, all without exchanging cash.',
        icon: ServicesIcon,
    },
    {
        id: 'mental_health',
        title: 'Mental Health & Support',
        description: 'Your well-being is paramount. BarterStreet connects you with certified counselors, life coaches, and wellness experts. Exchange your skills for valuable mental health support, creating a supportive community where everyone has access to the care they need.',
        icon: MentalHealthIcon,
    },
    {
        id: 'fitness',
        title: 'Fitness & Wellness',
        description: 'Achieve your health goals through barter. Trade your skills for personal training sessions, yoga classes, nutritional advice, and more. BarterStreet makes fitness and wellness accessible by leveraging the collective talents of the community.',
        icon: FitnessIcon,
    },
    {
        id: 'products',
        title: 'Products',
        description: 'Browse and trade physical goods. From handmade crafts to electronics, find what you need or list your own items for trade. BarterStreet connects you with a marketplace of products, expanding the possibilities beyond just services.',
        icon: ProductsIcon,
    },
];
