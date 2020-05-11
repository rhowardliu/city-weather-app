import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankItemComponent } from './blank-item.component';

describe('BlankItemComponent', () => {
  let component: BlankItemComponent;
  let fixture: ComponentFixture<BlankItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
