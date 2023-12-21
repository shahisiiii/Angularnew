import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

getData(data:any):any{
  console.log(data)

}

form2:FormGroup

constructor(public formBuild:FormBuilder){
  this.form2=formBuild.group(
    {
      uname:[''],
      psw:['']

    }
  )

}

show():void{
  console.log(this.form2.value);
  
}

}
