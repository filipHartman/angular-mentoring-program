import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { render, RenderResult } from '@testing-library/angular';
import { ModalCardComponent } from './modal-card.component';
import { ModalCardModule } from './modal-card.module';

const refMock = {
  close(value: any) {},
};

describe('ModalCardComponent', () => {
  let component: RenderResult<ModalCardComponent, ModalCardComponent>;

  beforeEach(async () => {
    component = await render(ModalCardComponent, {
      imports: [ModalCardModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: refMock,
        },
      ],
    });
  });

  it('should create modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should call close method of modal ref without anything after clicking no button', () => {
    const { getByText, click } = component;
    const modalRef = TestBed.inject(MatDialogRef);
    spyOn(modalRef, 'close');
    click(getByText('No'));
    expect(modalRef.close).toHaveBeenCalled();
  });

  it('should call close method of modal ref with true after clicking yes button', () => {
    const { getByText, click } = component;
    const modalRef = TestBed.inject(MatDialogRef);
    spyOn(modalRef, 'close');
    click(getByText('Yes'));
    expect(modalRef.close).toHaveBeenCalledWith(true);
  });
});
