import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '@components/footer/footer.module';
import { HeaderModule } from '@components/header/header.module';
import { PageContainerComponent } from './page-container.component';

@NgModule({
  declarations: [PageContainerComponent],
  exports: [PageContainerComponent],
  imports: [CommonModule, HeaderModule, FooterModule],
})
export class PageContainerModule {}
