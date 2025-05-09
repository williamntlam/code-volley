import { Injectable } from '@angular/core';
import { DesignPattern } from '../models/design-pattern.model';

@Injectable({
  providedIn: 'root'
})
export class DesignPatternsService {
  private patterns: DesignPattern[] = [
    // Creational Patterns
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
    },
    {
      id: '2',
      name: 'Factory Method',
      description: 'Define an interface for creating an object, but let subclasses decide which class to instantiate.',
      category: 'creational',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create an interface for the product',
        'Implement a factory method in the creator class',
        'Create concrete implementations of the product',
        'Implement concrete creators that override the factory method'
      ]
    },
    {
      id: '3',
      name: 'Abstract Factory',
      description: 'Provide an interface for creating families of related or dependent objects without specifying their concrete classes.',
      category: 'creational',
      difficulty: 'advanced',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create abstract factory interface',
        'Implement concrete factories',
        'Create abstract product interfaces',
        'Implement concrete products'
      ]
    },
    {
      id: '4',
      name: 'Builder',
      description: 'Separate the construction of a complex object from its representation.',
      category: 'creational',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create a builder interface',
        'Implement concrete builders',
        'Create a director class',
        'Implement the product class'
      ]
    },
    {
      id: '5',
      name: 'Prototype',
      description: 'Create new objects by cloning an existing object, known as the prototype.',
      category: 'creational',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create a prototype interface',
        'Implement concrete prototypes',
        'Add clone method to create copies',
        'Implement client code to use prototypes'
      ]
    },

    // Structural Patterns
    {
      id: '6',
      name: 'Adapter',
      description: 'Convert the interface of a class into another interface clients expect.',
      category: 'structural',
      difficulty: 'beginner',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create target interface',
        'Implement adapter class',
        'Create adaptee class',
        'Implement client code using adapter'
      ]
    },
    {
      id: '7',
      name: 'Bridge',
      description: 'Decouple an abstraction from its implementation so that the two can vary independently.',
      category: 'structural',
      difficulty: 'advanced',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create abstraction interface',
        'Implement refined abstractions',
        'Create implementation interface',
        'Implement concrete implementations'
      ]
    },
    {
      id: '8',
      name: 'Composite',
      description: 'Compose objects into tree structures to represent part-whole hierarchies.',
      category: 'structural',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create component interface',
        'Implement leaf class',
        'Implement composite class',
        'Implement client code to use composite structure'
      ]
    },
    {
      id: '9',
      name: 'Decorator',
      description: 'Attach additional responsibilities to an object dynamically.',
      category: 'structural',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create component interface',
        'Implement concrete component',
        'Create decorator class',
        'Implement concrete decorators'
      ]
    },
    {
      id: '10',
      name: 'Facade',
      description: 'Provide a unified interface to a set of interfaces in a subsystem.',
      category: 'structural',
      difficulty: 'beginner',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create facade class',
        'Implement subsystem classes',
        'Create simplified interface',
        'Implement client code using facade'
      ]
    },

    // Behavioral Patterns
    {
      id: '11',
      name: 'Observer',
      description: 'Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.',
      category: 'behavioral',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create subject interface',
        'Create observer interface',
        'Implement concrete subject',
        'Implement concrete observers'
      ]
    },
    {
      id: '12',
      name: 'Strategy',
      description: 'Define a family of algorithms, encapsulate each one, and make them interchangeable.',
      category: 'behavioral',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create strategy interface',
        'Implement concrete strategies',
        'Create context class',
        'Implement client code using strategies'
      ]
    },
    {
      id: '13',
      name: 'Command',
      description: 'Encapsulate a request as an object, thereby letting you parameterize clients with different requests.',
      category: 'behavioral',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create command interface',
        'Implement concrete commands',
        'Create invoker class',
        'Create receiver class'
      ]
    },
    {
      id: '14',
      name: 'State',
      description: 'Allow an object to alter its behavior when its internal state changes.',
      category: 'behavioral',
      difficulty: 'advanced',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create state interface',
        'Implement concrete states',
        'Create context class',
        'Implement state transitions'
      ]
    },
    {
      id: '15',
      name: 'Template Method',
      description: 'Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.',
      category: 'behavioral',
      difficulty: 'intermediate',
      languages: ['TypeScript', 'Java', 'Python', 'C#'],
      requirements: [
        'Create abstract class with template method',
        'Define primitive operations',
        'Implement concrete subclasses',
        'Override primitive operations'
      ]
    }
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