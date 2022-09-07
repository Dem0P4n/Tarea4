import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HistoriaImagen } from './../../modelos/historia-imagen';
@Component({
  selector: 'app-listar-pokemon',
  templateUrl: './listar-pokemon.component.html',
  styleUrls: ['./listar-pokemon.component.scss']
})
export class ListarPokemonComponent{

  @Input() public pokemones: Array<HistoriaImagen> = [];
  @Output() public posIndex = new EventEmitter<number>();
  @Output() public idPoke2 = new EventEmitter<number>();

  public escucharId(id: number): void {
    const pos = this.pokemones.findIndex((elemento) => {
      return id === elemento.id;
    });
    this.posIndex.emit(pos);



  }

  public mandarId(id:number): void {
    console.log('xd=', id)
    this.idPoke2.emit(id);
  }


}
