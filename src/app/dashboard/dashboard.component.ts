import { Component } from '@angular/core';

interface NavigationLink {
  path: string,
  title: string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public links: NavigationLink[] = [
    { path: 'table', title: 'Table' },
    { path: 'second', title: 'Second' },
    { path: 'third', title: 'Third' },
  ];
}
