import { Component, Output, EventEmitter} from '@angular/core';
import {HistoriaImagen} from './../../modelos/historia-imagen'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent  {

  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<HistoriaImagen>();

  public nuevoHistorial: HistoriaImagen = {
    nombre: '',
    detalle: '',
    imagen: ''
  }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
    this.salida.emit();
  }
  public cambiarDetalle(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.detalle = elemento.value;
    this.salidaString.emit(elemento.value);
  }
  public cambiarImagen(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.imagen = elemento.value;
  }

  public guardarHistorial(): void {

    const copia: HistoriaImagen = {
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);

    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.detalle = '';
    this.nuevoHistorial.imagen = '';
    console.log('Mensaje desde el hijo :D')
    this.salida.emit();
  }


}
