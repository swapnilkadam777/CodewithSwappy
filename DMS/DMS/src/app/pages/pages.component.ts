import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { NavbarComponent } from './comp/navbar/navbar.component';
@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
