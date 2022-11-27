import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTitleComponent } from './state-title.component';

describe('StateTitleComponent', () => {
  let component: StateTitleComponent;
  let fixture: ComponentFixture<StateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
