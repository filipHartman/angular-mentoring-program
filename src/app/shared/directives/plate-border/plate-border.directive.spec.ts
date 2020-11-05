import { Component } from '@angular/core';
import { render, RenderResult } from '@testing-library/angular';
import {
  futureDate,
  moreThanTwoWeeksBefore,
  today,
  twoWeeksBefore,
} from 'app/shared/testUtils';
import { PlateBorderDirective } from './plate-border.directive';

@Component({
  selector: 'app-test-host',
  template: ` <div [appPlateBorder]="creationDate">Test element</div> `,
})
export class TestHostComponent {
  creationDate = today;
}
describe('PlateBorderDirective', () => {
  let component: RenderResult<TestHostComponent, TestHostComponent>;

  beforeEach(async () => {
    component = await render(TestHostComponent, {
      declarations: [TestHostComponent, PlateBorderDirective],
      detectChanges: false,
    });
  });

  it('should add green border to test element for creation date as today', () => {
    component.fixture.detectChanges();
    const { getByText } = component;
    const el = getByText('Test element');
    const borderColor = el.style.borderColor;
    const boxShadow = el.style.boxShadow;

    expect(
      borderColor === 'rgb(0, 230, 64)' &&
        boxShadow === 'rgba(0, 230, 64, 0.3) 0px 0px 6px 3px',
    ).toBeTrue();
  });

  it('should add green border to test element for creation date as 14 day before today', () => {
    component.fixture.componentInstance.creationDate = twoWeeksBefore;
    component.fixture.detectChanges();

    const { getByText } = component;
    const el = getByText('Test element');
    const borderColor = el.style.borderColor;
    const boxShadow = el.style.boxShadow;

    expect(
      borderColor === 'rgb(0, 230, 64)' &&
        boxShadow === 'rgba(0, 230, 64, 0.3) 0px 0px 6px 3px',
    ).toBeTrue();
  });

  it('should add blue border to test element for creation date as future date', () => {
    component.fixture.componentInstance.creationDate = futureDate;
    component.fixture.detectChanges();

    const { getByText } = component;
    const el = getByText('Test element');
    const borderColor = el.style.borderColor;
    const boxShadow = el.style.boxShadow;

    expect(
      borderColor === 'rgb(34, 167, 240)' &&
        boxShadow === 'rgba(34, 167, 240, 0.3) 0px 0px 6px 3px',
    ).toBeTrue();
  });

  it('should add gray border to test element for creation date as more than 14 day before today', () => {
    component.fixture.componentInstance.creationDate = moreThanTwoWeeksBefore;
    component.fixture.detectChanges();

    const { getByText } = component;
    const el = getByText('Test element');
    const borderColor = el.style.borderColor;
    const boxShadow = el.style.boxShadow;

    expect(
      borderColor === 'rgb(165, 163, 163)' &&
        boxShadow === 'rgba(165, 163, 163, 0.3) 0px 0px 6px 3px',
    ).toBeTrue();
  });
});
