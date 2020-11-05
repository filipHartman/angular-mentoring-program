import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlateBorderDirective } from './plate-border/plate-border.directive';

@NgModule({
  declarations: [PlateBorderDirective],
  exports: [PlateBorderDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
