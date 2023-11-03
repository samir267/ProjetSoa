import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnseignantComponent } from './new-enseignant.component';

describe('NewEnseignantComponent', () => {
  let component: NewEnseignantComponent;
  let fixture: ComponentFixture<NewEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEnseignantComponent]
    });
    fixture = TestBed.createComponent(NewEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
