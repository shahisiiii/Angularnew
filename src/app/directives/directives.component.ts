import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {


  s:any=true

  arr:any[]=[
    {id:100,name:"shahis",email:"shahis@gmail.com"},
    {id:101,name:"sham",email:"sham@gmail.com"},
    {id:102,name:"shamil",email:"shamil@gmail.com"},
    {id:103,name:"shanu",email:"shanu@gmail.com"}
]


}
