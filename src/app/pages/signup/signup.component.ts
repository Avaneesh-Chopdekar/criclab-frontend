import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm: FormGroup;
  invalidPasswordMessage =
    'Password must be at least 8 characters long, 30 characters maximum and contain at least one lowercase letter, one uppercase letter, one digit and one special character';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group(
      {
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
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,30}$/
            ),
          ],
        ],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Access form controls for error handling
  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  // Submit handler
  onSubmit() {
    if (this.signupForm.valid) {
      console.log('signup Data:', this.signupForm.value);
      this.signup();
    } else {
      this.signupForm.markAllAsTouched(); // Highlight errors
    }
  }

  signup() {
    this.auth
      .signup({ email: this.email?.value, password: this.password?.value })
      .subscribe({
        next: () => this.router.navigate(['/admin-panel']),
        error: (err) => console.log('Signup failed', err),
      });
  }
}
