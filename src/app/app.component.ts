import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenService } from './auth/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecaleg-v1';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/auth/login') {
          // this.utils.clearAllLocalstorage();
        }
      }
    });
  }
}
