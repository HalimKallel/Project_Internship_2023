import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuside',
  templateUrl: './menuside.component.html',
  styleUrls: ['./menuside.component.css']
})
export class MenusideComponent {
  constructor(private router: Router) {}

  logout(): void {
    this.router.navigateByUrl('/');
  }
}
