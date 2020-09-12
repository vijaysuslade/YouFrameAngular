import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListimageComponent } from './listimage/listimage.component';

@NgModule({
  declarations: [ListimageComponent],
  imports: [
    CommonModule
  ],
  exports:[ListimageComponent]
})
export class ImageModuleModule { }
