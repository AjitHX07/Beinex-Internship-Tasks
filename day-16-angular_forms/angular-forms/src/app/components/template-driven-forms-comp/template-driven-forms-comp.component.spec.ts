import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsCompComponent } from './template-driven-forms-comp.component';

describe('TemplateDrivenFormsCompComponent', () => {
  let component: TemplateDrivenFormsCompComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
