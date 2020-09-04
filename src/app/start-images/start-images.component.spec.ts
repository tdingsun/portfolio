import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartImagesComponent } from './start-images.component';

describe('StartImagesComponent', () => {
  let component: StartImagesComponent;
  let fixture: ComponentFixture<StartImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
