import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserAppComponent } from './modal-user-app.component';

describe('ModalUserAppComponent', () => {
  let component: ModalUserAppComponent;
  let fixture: ComponentFixture<ModalUserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalUserAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
