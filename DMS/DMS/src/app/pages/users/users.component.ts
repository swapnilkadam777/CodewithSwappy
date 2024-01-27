import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
    data =[{
      id:123,
      name:"Swapnil Ashok Kadam",
      DOB:new Date(),
      mobileNumber:9158235273
    },{
      id:122,
      name:"Sagar ",
      DOB:new Date(),
      mobileNumber:6596325665
    },{
      id:123,
      name:"Swapnil Ashok Kadam",
      DOB:new Date(),
      mobileNumber:9158235273
    },{
      id:122,
      name:"Sagar ",
      DOB:new Date(),
      mobileNumber:6596325665
    }]
}
