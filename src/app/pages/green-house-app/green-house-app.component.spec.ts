import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenHouseAppComponent } from './green-house-app.component';

describe('GreenHouseAppComponent', () => {
  let component: GreenHouseAppComponent;
  let fixture: ComponentFixture<GreenHouseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenHouseAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenHouseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
