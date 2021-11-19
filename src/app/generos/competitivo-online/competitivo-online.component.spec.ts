import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitivoOnlineComponent } from './competitivo-online.component';

describe('CompetitivoOnlineComponent', () => {
  let component: CompetitivoOnlineComponent;
  let fixture: ComponentFixture<CompetitivoOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitivoOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitivoOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
