import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() {}

   getValue(data:any):void{
    console.log(data);
    
   }
}
