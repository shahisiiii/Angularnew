import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { EventComponent } from './event/event.component';
import { TwowayComponent } from './twoway/twoway.component';

const routes: Routes = [
    {path:'d1',component:Day1Component},
    {path:'envent',component:EventComponent},
    {path:'twoway',component:TwowayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
