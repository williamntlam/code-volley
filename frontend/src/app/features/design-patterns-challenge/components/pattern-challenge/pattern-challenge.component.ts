import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DesignPatternsService } from '../../services/design-patterns.service';
import { DesignPattern } from '../../models/design-pattern.model';

@Component({
  selector: 'app-pattern-challenge',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pattern-challenge.component.html',
})
export class PatternChallengeComponent implements OnInit {
  pattern: DesignPattern | undefined;
  userImplementation: string = '';

  constructor(
    private route: ActivatedRoute,
    private designPatternsService: DesignPatternsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const patternId = params['id'];
      this.pattern = this.designPatternsService.getPatternById(patternId);
    });
  }

  submitImplementation() {
    // TODO: Implement solution submission logic
    console.log('Submitted implementation:', this.userImplementation);
  }
} 