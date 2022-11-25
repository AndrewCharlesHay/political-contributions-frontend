import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanidateComponent } from './canidate.component';

describe('CanidateComponent', () => {
  let component: CanidateComponent;
  let fixture: ComponentFixture<CanidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
