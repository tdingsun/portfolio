import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticImgComponent } from './static-img.component';

describe('StaticImgComponent', () => {
  let component: StaticImgComponent;
  let fixture: ComponentFixture<StaticImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
