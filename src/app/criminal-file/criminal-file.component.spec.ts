import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalFileComponent } from './criminal-file.component';

describe('CriminalFileComponent', () => {
  let component: CriminalFileComponent;
  let fixture: ComponentFixture<CriminalFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
