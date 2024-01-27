import { Component } from '@angular/core';
import { AuthService } from '../../../auth.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService){}
  logout = ()=>{
    this.authService.logout(); 
   }; 
}
