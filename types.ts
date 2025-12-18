
export interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  description: string[];
  githubUrl: string;
  liveUrl?: string;
  date: string;
}

export interface Achievement {
  title: string;
  details: string;
  year: string;
  certificateUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
