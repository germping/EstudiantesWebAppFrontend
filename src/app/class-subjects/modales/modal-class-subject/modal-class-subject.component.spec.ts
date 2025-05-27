import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClassSubjectComponent } from './modal-class-subject.component';

describe('ModalClassSubjectComponent', () => {
  let component: ModalClassSubjectComponent;
  let fixture: ComponentFixture<ModalClassSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalClassSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalClassSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
