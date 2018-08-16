import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacraDetailComponent } from './lacra-detail.component';

describe('LacraDetailComponent', () => {
  let component: LacraDetailComponent;
  let fixture: ComponentFixture<LacraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
