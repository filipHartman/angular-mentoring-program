import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { render, RenderResult } from '@testing-library/angular';
import { PageContainerModule } from './page-container.module';

@Component({
  selector: 'app-test-host',
  template: `
    <app-page-container>
      <div>This is the page content</div>
    </app-page-container>
  `,
})
export class TestHostComponent {}

describe('PageContainerComponent', () => {
  let component: RenderResult<TestHostComponent, TestHostComponent>;

  beforeEach(async () => {
    component = await render(TestHostComponent, {
      declarations: [TestHostComponent],
      imports: [PageContainerModule, RouterTestingModule],
    });
  });

  it('should display page content', () => {
    const { getByText } = component;
    expect(getByText('This is the page content')).toBeTruthy();
  });
});
