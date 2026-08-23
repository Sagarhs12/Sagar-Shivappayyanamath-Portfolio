export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Cybersecurity' | 'Deep Learning' | 'Cloud & DevOps' | 'Full-Stack & Web' | 'IoT & Automation';
  timeline?: string;
  description: string;
  longDescription: string;
  achievement?: string;
  tags: string[];
  image: string;
  stats: { label: string; value: string }[];
  features: string[];
  architecture: string[];
  githubUrl?: string;
  liveUrl?: string;
  interactiveType?: 'pneumonia-scan' | 'cicd-runner' | 'cyber-threat-scan' | 'course-platform-preview' | 'aquasaver-flow';
}

export interface SkillItem {
  name: string;
  level: number; // percentage e.g. 90
  category: 'AI & Machine Learning' | 'Cloud & DevOps' | 'Languages & Frameworks' | 'Data & Analytics';
  icon: string;
  description: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeType: string;
  description: string;
  skillsLearned: string[];
  credentialId?: string;
  verifyUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'experience' | 'education';
  highlights: string[];
  techStack?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedPrompts?: string[];
}
