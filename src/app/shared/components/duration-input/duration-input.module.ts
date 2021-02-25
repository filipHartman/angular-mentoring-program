import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '@pipes/pipes.module';
import { DurationInputComponent } from './duration-input.component';

@NgModule({
  declarations: [DurationInputComponent],
  exports: [DurationInputComponent],
  imports: [CommonModule, PipesModule],
})
export class DurationInputModule {}
