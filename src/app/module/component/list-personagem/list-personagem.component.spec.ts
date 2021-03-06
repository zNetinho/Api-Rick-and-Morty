import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieComponent } from './list-personagem.component';

describe('ListMovieComponent', () => {
  let component: ListMovieComponent;
  let fixture: ComponentFixture<ListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
