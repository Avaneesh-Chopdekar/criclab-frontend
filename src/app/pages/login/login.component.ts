import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidPasswordMessage =
    'Password must be at least 8 characters long, 30 characters maximum and contain at least one lowercase letter, one uppercase letter, one digit and one special character';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,30}$/
          ),
        ],
      ],
    });
  }

  // Access form controls for error handling
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Submit handler
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      this.login();
    } else {
      this.loginForm.markAllAsTouched(); // Highlight errors
    }
  }

  login() {
    this.auth
      .login({ email: this.email?.value, password: this.password?.value })
      .subscribe({
        next: () => this.router.navigate(['/admin-panel']),
        error: (err) => console.log('Login failed', err),
      });
  }
}
