import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMyselfComponent } from './search-myself.component';

describe('SearchMyselfComponent', () => {
  let component: SearchMyselfComponent;
  let fixture: ComponentFixture<SearchMyselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMyselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
