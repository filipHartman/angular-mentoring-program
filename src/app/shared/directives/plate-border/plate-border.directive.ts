import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { differenceInDays, startOfToday } from 'date-fns';

@Directive({
  selector: '[appPlateBorder]',
})
export class PlateBorderDirective implements OnInit {
  @Input('appPlateBorder') creationTime: Date;
  private today = startOfToday();
  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const difference = differenceInDays(this.today, this.creationTime);
    this.renderer.setStyle(
      this.el.nativeElement,
      'border-color',
      this.getColorBasedOnDayDifference(difference, 1),
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `0px 0px 6px 3px ${this.getColorBasedOnDayDifference(difference, 0.3)}`,
    );
  }

  private getColorBasedOnDayDifference(
    difference: number,
    alpha: number,
  ): string {
    if (difference < 0) {
      return `rgba(34, 167, 240, ${alpha})`;
    } else if (difference <= 14) {
      return `rgba(0, 230, 64, ${alpha})`;
    } else {
      return `rgba(165, 163, 163, ${alpha})`;
    }
  }
}
