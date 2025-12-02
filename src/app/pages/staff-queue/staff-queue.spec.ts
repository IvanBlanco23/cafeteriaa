import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffQueue } from './staff-queue';

describe('StaffQueue', () => {
  let component: StaffQueue;
  let fixture: ComponentFixture<StaffQueue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffQueue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffQueue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
