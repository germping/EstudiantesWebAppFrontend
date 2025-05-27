import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassSubjectComponent } from './list-class-subject.component';

describe('ListClassSubjectComponent', () => {
  let component: ListClassSubjectComponent;
  let fixture: ComponentFixture<ListClassSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClassSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClassSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
