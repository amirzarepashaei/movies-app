import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSpecComponent } from './movie-spec.component';

describe('MovieSpecComponent', () => {
  let component: MovieSpecComponent;
  let fixture: ComponentFixture<MovieSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
