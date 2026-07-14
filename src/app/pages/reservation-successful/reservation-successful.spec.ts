import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSuccessful } from './reservation-successful';

describe('ReservationSuccessful', () => {
  let component: ReservationSuccessful;
  let fixture: ComponentFixture<ReservationSuccessful>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationSuccessful],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationSuccessful);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
