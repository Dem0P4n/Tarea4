import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPokemonComponent } from './listar-pokemon.component';

describe('ListarPokemonComponent', () => {
  let component: ListarPokemonComponent;
  let fixture: ComponentFixture<ListarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
