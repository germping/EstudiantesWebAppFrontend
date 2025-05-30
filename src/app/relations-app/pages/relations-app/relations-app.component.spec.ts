import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsAppComponent } from './relations-app.component';

describe('RelationsAppComponent', () => {
  let component: RelationsAppComponent;
  let fixture: ComponentFixture<RelationsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationsAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
