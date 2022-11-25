import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigDetailComponent } from './pig-detail.component';

describe('PigDetailComponent', () => {
  let component: PigDetailComponent;
  let fixture: ComponentFixture<PigDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
