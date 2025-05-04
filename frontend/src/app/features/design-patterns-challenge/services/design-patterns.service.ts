import { Injectable } from '@angular/core';
import { DesignPattern } from '../models/design-pattern.model';

@Injectable({
  providedIn: 'root'
})
export class DesignPatternsService {
  private patterns: DesignPattern[] = [
    {
      id: '1',
      name: 'Singleton',
      description: 'Ensure a class has only one instance and provide a global point of access to it.',
      category: 'creational',
      difficulty: 'beginner',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create a class that can only be instantiated once',
        'Provide a global access point to the instance',
        'Ensure thread safety if applicable'
      ]
    }
    // Add more patterns here
  ];

  getPatterns(): DesignPattern[] {
    return this.patterns;
  }

  getPatternById(id: string): DesignPattern | undefined {
    return this.patterns.find(pattern => pattern.id === id);
  }

  getPatternsByCategory(category: string): DesignPattern[] {
    return this.patterns.filter(pattern => pattern.category === category);
  }

  getPatternsByDifficulty(difficulty: string): DesignPattern[] {
    return this.patterns.filter(pattern => pattern.difficulty === difficulty);
  }
} 