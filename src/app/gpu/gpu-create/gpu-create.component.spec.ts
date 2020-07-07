import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuCreateComponent } from './gpu-create.component';

describe('GpuCreateComponent', () => {
  let component: GpuCreateComponent;
  let fixture: ComponentFixture<GpuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
