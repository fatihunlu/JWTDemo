import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel: any = {};

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerModel).subscribe(()=> {
      alert("user created");
    }, error => {
      alert("error => "+ error);
    }, () => {
      this.authService.login(this.registerModel).subscribe(()=> {
        this.router.navigate(['/fetch-data']);
      })
    });
  }
}
