import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyselfComponent } from './update-myself.component';

describe('UpdateMyselfComponent', () => {
  let component: UpdateMyselfComponent;
  let fixture: ComponentFixture<UpdateMyselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMyselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
