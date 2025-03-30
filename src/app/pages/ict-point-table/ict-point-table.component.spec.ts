import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctPointTableComponent } from './ict-point-table.component';

describe('IctPointTableComponent', () => {
  let component: IctPointTableComponent;
  let fixture: ComponentFixture<IctPointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IctPointTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IctPointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
