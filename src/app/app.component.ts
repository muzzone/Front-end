import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authToken = '';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getToken_().subscribe((token: any) => {
      this.authToken = token;
      console.log(token);
    });
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
