import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressComponent } from './dress.component';

describe('DressComponent', () => {
  let component: DressComponent;
  let fixture: ComponentFixture<DressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
