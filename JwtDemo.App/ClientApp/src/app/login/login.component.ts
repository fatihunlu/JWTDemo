import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: any = {};

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginModel).subscribe(next => {
      alert("Successfull login");
      this.router.navigate(['/']);
    }, error => {
      alert(error);
    });
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
