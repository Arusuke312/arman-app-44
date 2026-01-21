import { Friend, Goal, Rival, Transaction } from "./types";

export const MOCK_FRIENDS: Friend[] = [
  { id: '1', name: 'Heer', avatarUrl: 'https://picsum.photos/seed/heer/100' },
  { id: '2', name: 'Arman', avatarUrl: 'https://picsum.photos/seed/arman/100' },
  { id: '3', name: 'Nishi', avatarUrl: 'https://picsum.photos/seed/nishi/100' },
  { id: '4', name: 'Yash', avatarUrl: 'https://picsum.photos/seed/yash/100' },
  { id: '5', name: 'Kavya', avatarUrl: 'https://picsum.photos/seed/kavya/100' },
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  { id: 't1', merchant: 'Starbucks', amount: 350, category: 'Food', date: 'Today, 10:30 AM', logoUrl: 'https://picsum.photos/seed/starbucks/50' },
  { id: 't2', merchant: 'Uber', amount: 180, category: 'Travel', date: 'Yesterday, 6:15 PM', logoUrl: 'https://picsum.photos/seed/uber/50' },
  { id: 't3', merchant: 'H&M', amount: 1299, category: 'Shopping', date: 'Yesterday, 2:00 PM', logoUrl: 'https://picsum.photos/seed/hm/50' },
  { id: 't4', merchant: 'Spotify', amount: 119, category: 'Entertainment', date: '2 Feb, 9:00 AM', logoUrl: 'https://picsum.photos/seed/spotify/50' },
];

export const ACTIVE_GOALS: Goal[] = [
  { id: 'g1', title: 'iPhone 17', targetAmount: 80000, currentAmount: 64000, image: '📱' },
  { id: 'g2', title: 'New Sneakers', targetAmount: 12000, currentAmount: 4500, image: '👟' },
  { id: 'g3', title: 'Gold 10gm', targetAmount: 65000, currentAmount: 10000, image: '🧈' },
];

export const LEADERBOARD: Rival[] = [
  { id: 'r1', name: 'Heer', points: 950, rank: 1, isUser: false },
  { id: 'r2', name: 'Arman', points: 920, rank: 2, isUser: false },
  { id: 'r3', name: 'Arjun', points: 857, rank: 3, isUser: true },
  { id: 'r4', name: 'Nishi', points: 700, rank: 4, isUser: false },
];
