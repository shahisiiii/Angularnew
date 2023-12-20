import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributdirectivesComponent } from './atributdirectives.component';

describe('AtributdirectivesComponent', () => {
  let component: AtributdirectivesComponent;
  let fixture: ComponentFixture<AtributdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtributdirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtributdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
