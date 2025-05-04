export interface DesignPattern {
  id: string;
  name: string;
  description: string;
  category: 'creational' | 'structural' | 'behavioral';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  languages: string[];
  example?: string;
  requirements: string[];
} 