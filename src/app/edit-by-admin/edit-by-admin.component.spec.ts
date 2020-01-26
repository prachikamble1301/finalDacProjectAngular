import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditByAdminComponent } from './edit-by-admin.component';

describe('EditByAdminComponent', () => {
  let component: EditByAdminComponent;
  let fixture: ComponentFixture<EditByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
