import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
    {path:'d1',component:Day1Component},
    {path:'event',component:EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
