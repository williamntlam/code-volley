import { Routes } from '@angular/router';
import { PatternListComponent } from './features/design-patterns-challenge/components/pattern-list/pattern-list.component';
import { PatternChallengeComponent } from './features/design-patterns-challenge/components/pattern-challenge/pattern-challenge.component';

export const routes: Routes = [
  {
    path: 'design-patterns',
    children: [
      {
        path: '',
        component: PatternListComponent
      },
      {
        path: ':id',
        component: PatternChallengeComponent
      }
    ]
  }
];
