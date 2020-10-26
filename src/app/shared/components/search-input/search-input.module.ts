import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SearchInputModule {}
