import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$'),
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
  //   ]),
  //   isRecievePromotions: new FormControl(false, []),
  // });

  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  onLogin() {
    this.authService.login(this.user).subscribe((res) => {
      if (res) {
        this.router.navigate(['/home']);
      }
      console.log('res', res);
    });
  }

  demo() {
    this.user = {
      email: 'tracey.ramos@reqres.in',
      password: '12345aA!',
    };
  }
}
