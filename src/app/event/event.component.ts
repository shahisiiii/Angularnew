import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  x:any=""
  getdata(data:any):void{
    console.log(data)
    this.x=data
  }



}
