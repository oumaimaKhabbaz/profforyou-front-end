import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsAdComponent } from './tutors-ad.component';

describe('TutorsAdComponent', () => {
  let component: TutorsAdComponent;
  let fixture: ComponentFixture<TutorsAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorsAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
