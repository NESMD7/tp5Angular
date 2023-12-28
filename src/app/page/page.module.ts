import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    LandingpageComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ]
  ,
  exports: [
    LandingpageComponent
  ]
})
export class PageModule { }
