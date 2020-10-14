import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container.component';

@NgModule({
  declarations: [PageContainerComponent],
  exports: [PageContainerComponent],
  imports: [CommonModule, HeaderModule, FooterModule],
})
export class PageContainerModule {}
