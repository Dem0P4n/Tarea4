import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HistoriaImagen } from './../../modelos/historia-imagen'
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent{

  @Input() public pokemon!: HistoriaImagen;
  @Output() public idPokemon = new EventEmitter<number>();


  public emitirId(): void {
    this.idPokemon.emit(this.pokemon.id);
  }



}
