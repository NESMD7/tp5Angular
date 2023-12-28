import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreComponent } from './membre/membre.component';



@NgModule({
  declarations: [
    MembreComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports: [
    MembreComponent
  ]
})
export class MembreModule { }
