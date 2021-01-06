import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from '@components/footer/footer.module';
import { HeaderModule } from '@components/header/header.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { PageContainerComponent } from './page-container.component';

@NgModule({
  declarations: [PageContainerComponent],
  exports: [PageContainerComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BreadcrumbsModule,
    SpinnerModule,
  ],
})
export class PageContainerModule {}
