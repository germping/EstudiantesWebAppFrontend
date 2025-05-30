import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRelationsStudentsAppComponent } from './modal-relations-students-app.component';

describe('ModalRelationsStudentsAppComponent', () => {
  let component: ModalRelationsStudentsAppComponent;
  let fixture: ComponentFixture<ModalRelationsStudentsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRelationsStudentsAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRelationsStudentsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
