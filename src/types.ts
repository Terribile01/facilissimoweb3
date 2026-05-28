export type Page = 'home' | 'servizi' | 'chi-sono' | 'journal' | 'contatti' | 'social-leadgen' | 'team-ai' | 'privacy';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown supported
  category: 'design' | 'automazione' | 'strategia' | 'academy';
  readTime: string;
  date: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export interface LeadEstimatorAnswers {
  businessType: string;
  currentBottleneck: string;
  leadsPerMonth: string;
  hoursSpentAdmin: string;
}
