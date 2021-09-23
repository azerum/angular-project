import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NavigationLink } from "./interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public links: NavigationLink[] = [
    { path: 'first', title: 'First' },
    { path: 'second', title: 'Second' },
    { path: 'third', title: 'Third' },
  ];

  constructor(private router: Router) { }

  public goTo(path: string): void {
    const fullPath = '/dashboard/' + path;
    this.router.navigate([fullPath]).then();
  }
}
