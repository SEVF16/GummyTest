import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private serviceLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  onLogout(){
    this.serviceLogin.logout();
    this.router.navigate(['/login']);
  }
}
