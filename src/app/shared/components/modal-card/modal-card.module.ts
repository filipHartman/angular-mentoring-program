import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalCardComponent } from './modal-card.component';

@NgModule({
  declarations: [ModalCardComponent],
  exports: [ModalCardComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class ModalCardModule {}
