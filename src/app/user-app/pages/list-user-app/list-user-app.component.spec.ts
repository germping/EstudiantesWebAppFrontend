import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAppComponent } from './list-user-app.component';

describe('ListUserAppComponent', () => {
  let component: ListUserAppComponent;
  let fixture: ComponentFixture<ListUserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUserAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
