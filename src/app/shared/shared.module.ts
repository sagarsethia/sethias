import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule 
  ],
  declarations: [
    StarComponent,
    ConvertToSpacePipe,
  ],
  exports: [
    StarComponent,
    ConvertToSpacePipe,
    FormsModule,CommonModule
  ]
})
export class SharedModule { }
