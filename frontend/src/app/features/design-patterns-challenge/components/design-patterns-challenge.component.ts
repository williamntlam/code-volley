import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-design-patterns-challenge',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Design Patterns Challenge</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Pattern cards will go here -->
      </div>
    </div>
  `,
  styles: []
})
export class DesignPatternsChallengeComponent {
  // Component logic will go here
} 