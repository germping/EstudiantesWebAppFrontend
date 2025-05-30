import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRelationsTeachersAppComponent } from './modal-relations-teachers-app.component';

describe('ModalRelationsTeachersAppComponent', () => {
  let component: ModalRelationsTeachersAppComponent;
  let fixture: ComponentFixture<ModalRelationsTeachersAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRelationsTeachersAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRelationsTeachersAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
