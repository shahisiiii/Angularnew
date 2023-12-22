import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() {}
  obj1:any={}
   getValue(data:any):void{
    console.log(data)
    this.obj1=data
    console.log(this.obj1);
    
    
   }
}
