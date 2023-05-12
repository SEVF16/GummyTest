import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombreUsuario: string;
  public password: string;
  public error: string;
  constructor(private router: Router) {
    this.nombreUsuario = '';
    this.password = '';
    this.error = ''
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.nombreUsuario === 'admin' && this.password === 'admin') {
      localStorage.setItem('currentUser', JSON.stringify({ username: this.nombreUsuario }));
      this.router.navigate(['/cliente']);
    } else {
      this.error = 'Username or password is incorrect.';
    }
  }
}
