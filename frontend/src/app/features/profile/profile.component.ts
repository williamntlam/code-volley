import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username = 'johndoe';
  email = 'john.doe@example.com';
  memberSince = '2024';
  stats = {
    patternsCompleted: 12,
    successRate: '85%',
    daysStreak: 3
  };
  recentActivity = [
    {
      action: 'Completed Singleton Pattern Challenge',
      timeAgo: '2 hours ago'
    },
    {
      action: 'Started Observer Pattern Challenge', 
      timeAgo: '1 day ago'
    }
  ];
}