import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component implements OnInit{ 
  @Output() dataToParent = new EventEmitter<string>();
  ngOnInit(): void {
    const data = 'Data from child component';
    this.dataToParent.emit(data); 
  } 
}
