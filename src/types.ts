export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export interface PillarItem {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  accentBg: string;
  badgeBorder: string;
  textColor: string;
  iconName: 'Sun' | 'Mountain' | 'Landmark' | 'Flower2';
  description: string;
  quote: string;
  keyPoints: string[];
}

export interface KitItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  badgeColor: string;
  icon: 'Shirt' | 'BookOpen' | 'IdCard' | 'Award' | 'ShoppingBag' | 'Coffee' | 'Crown';
  description: string;
  highlight: string;
  tag: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  summary: string;
  activities: {
    time: string;
    title: string;
    type: 'Registro' | 'Formación' | 'Conexión' | 'Protocolar' | 'Social';
    location: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  topic: string;
  tag: string;
  color: string;
  photoUrl?: string;
  bio: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
  initials?: string;
}

export interface Committee {
  id: string;
  name: string;
  iconName: 'Code' | 'Megaphone' | 'Coins' | 'Truck' | 'Award';
  description: string;
  color: string;
  members: CommitteeMember[];
}

