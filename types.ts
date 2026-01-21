export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  category: 'Food' | 'Travel' | 'Entertainment' | 'Education' | 'Shopping';
  date: string;
  logoUrl: string;
}

export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  image: string; // Emoji or URL
}

export interface Friend {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Rival {
  id: string;
  name: string;
  points: number;
  rank: number;
  isUser: boolean;
}

export enum Tab {
  Home = 'home',
  Spend = 'spend',
  Goals = 'goals',
  Learn = 'learn',
  Controls = 'controls'
}