export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  description: string;
  skills: string[];
  experience: {
    year: string;
    title: string;
    company: string;
    desc: string;
  }[];
}