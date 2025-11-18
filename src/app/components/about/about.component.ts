import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  features = [
    {
      title: 'TypeScript',
      description: 'Type-safe development with full IntelliSense support',
      icon: '💻'
    },
    {
      title: 'Component Architecture',
      description: 'Modular and reusable components for better code organization',
      icon: '🧩'
    },
    {
      title: 'Routing',
      description: 'Client-side routing for seamless navigation',
      icon: '🗺️'
    },
    {
      title: 'Services',
      description: 'Dependency injection and service-based architecture',
      icon: '⚙️'
    },
    {
      title: 'Forms',
      description: 'Reactive and template-driven forms for user input',
      icon: '📝'
    },
    {
      title: 'HTTP Client',
      description: 'Built-in HTTP client for API communication',
      icon: '🌐'
    }
  ];
}

