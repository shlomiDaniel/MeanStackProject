import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuListComponent } from './gpu-list.component';

describe('GpuListComponent', () => {
  let component: GpuListComponent;
  let fixture: ComponentFixture<GpuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
