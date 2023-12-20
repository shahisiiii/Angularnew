import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { EventComponent } from './event/event.component';
import {FormsModule} from '@angular/forms';
import { TwowayComponent } from './twoway/twoway.component';
import { DirectivesComponent } from './directives/directives.component';
import { AtributdirectivesComponent } from './atributdirectives/atributdirectives.component';
import { PipeComponent } from './pipe/pipe.component'

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    EventComponent,
    TwowayComponent,
    DirectivesComponent,
    AtributdirectivesComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
