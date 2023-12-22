import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  getData(data:any):void{
    console.log(data)
    this.m.getValue(data) 
   }

  constructor(public m:MediatorService){}
  

}
