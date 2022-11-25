import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AogchickDetailComponent } from './aogchick-detail.component';

describe('AogchickDetailComponent', () => {
  let component: AogchickDetailComponent;
  let fixture: ComponentFixture<AogchickDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AogchickDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AogchickDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
