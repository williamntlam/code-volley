import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DesignPatternsService } from '../../services/design-patterns.service';
import { DesignPattern } from '../../models/design-pattern.model';

@Component({
  selector: 'app-pattern-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pattern-list.component.html',
})
export class PatternListComponent implements OnInit {
  patterns: DesignPattern[] = [];
  filteredPatterns: DesignPattern[] = [];
  currentFilter: 'all' | 'creational' | 'structural' | 'behavioral' = 'all';

  constructor(private designPatternsService: DesignPatternsService) {}

  ngOnInit() {
    this.patterns = this.designPatternsService.getPatterns();
    this.filteredPatterns = this.patterns;
  }

  filterPatterns(category: 'all' | 'creational' | 'structural' | 'behavioral') {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredPatterns = this.patterns;
    } else {
      this.filteredPatterns = this.designPatternsService.getPatternsByCategory(category);
    }
  }
} 