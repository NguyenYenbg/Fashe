import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  isInvalidInput: boolean = null;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login(): void {
    this.authService
      .login(this.loginForm.value)
      .then(() => {
        this.isInvalidInput = false;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
        this.toastr.success('Successful login!');
      })
      .catch(() => {
        this.isInvalidInput = true;
        this.toastr.warning('Incorrect input. Please try again!');
      });
  }

  demo() {
    this.email = 'yennt44@gmail.com';
    this.password = '11111111';
  }
}
