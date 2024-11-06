import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrivenFormsCompComponent } from './reactive-driven-forms-comp.component';

describe('ReactiveDrivenFormsCompComponent', () => {
  let component: ReactiveDrivenFormsCompComponent;
  let fixture: ComponentFixture<ReactiveDrivenFormsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveDrivenFormsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDrivenFormsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
