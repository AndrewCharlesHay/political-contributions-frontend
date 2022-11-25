import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanidateListComponent } from './canidate-list.component';

describe('CanidateListComponent', () => {
  let component: CanidateListComponent;
  let fixture: ComponentFixture<CanidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanidateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
