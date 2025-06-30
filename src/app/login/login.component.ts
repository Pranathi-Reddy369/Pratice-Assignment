import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginData.username==='admin' && this.loginData.password==='admin') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', 'admin')
      this.router.navigate(['/home']);
    }
    else{
      alert("Invalidcredentials")
    }
  }

}
