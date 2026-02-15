export interface BlogPost {
  id: number;
  title: string;
  url: string;
  date: string;
  tags: string[];
  category: 'EKS' | 'Security' | 'Automation' | 'AI/ML' | 'Blockchain';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  metrics: string[];
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Certification {
  name: string;
  level: string;
  icon: string;
}
