import { render, RenderResult } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: RenderResult<FooterComponent, FooterComponent>;

  beforeEach(async () => {
    component = await render(FooterComponent, {
      declarations: [FooterComponent],
    });
  });

  it('should show the content of the footer', () => {
    const { getByText } = component;
    expect(
      getByText('Copyright © Videocourses. All rights reserved'),
    ).toBeTruthy();
  });
});
