
import type React from 'react';

export interface User {
  id: number;
  username: string;
  password?: string; // Made optional for security when passing to components
  email: string;
  credits: number;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
