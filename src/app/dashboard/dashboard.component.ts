import { Component } from '@angular/core';
import { NavigationLink } from "./navigation-link";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public navLinks: NavigationLink[] = [
    { routerLink: 'table', title: 'Table' },
    { routerLink: 'second', title: 'Second' },
    { routerLink: 'third', title: 'Third' },
  ];
}
