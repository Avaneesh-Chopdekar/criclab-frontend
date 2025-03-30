import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplPointTableComponent } from './ipl-point-table.component';

describe('IplPointTableComponent', () => {
  let component: IplPointTableComponent;
  let fixture: ComponentFixture<IplPointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IplPointTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IplPointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
