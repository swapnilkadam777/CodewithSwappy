import { Component } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Comp1Component,Comp2Component],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  parentData = 'Data from parent component'; 
  receivedData: string | undefined; 
  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }

}
