import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultijogadorComponent } from './multijogador.component';

describe('MultijogadorComponent', () => {
  let component: MultijogadorComponent;
  let fixture: ComponentFixture<MultijogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultijogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultijogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
