import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoModule } from '@components/logo/logo.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, LogoModule, FontAwesomeModule],
})
export class HeaderModule {}
