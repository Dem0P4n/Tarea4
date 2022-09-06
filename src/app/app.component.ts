import { Component, NgModule } from '@angular/core';
import { HistoriaImagen } from './modelos/historia-imagen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public elementosGuardados: Array<HistoriaImagen> = [];
  public imagen: string = 'https://univia.info/wp-content/uploads/2015/09/33.jpg';
  public imagen2: string = 'https://static9.depositphotos.com/94920/1090/i/450/depositphotos_10907008-stock-photo-siberian-cat-sitting-in-front.jpg';


  public escuchandoAlHijo(){
    console.log('Hola desde el padre!!!')
  }

  public escuchandoDetalle(hijo: string){
    console.log('El padre dice', hijo)
  }

  public agregarNuevo(nuevo:HistoriaImagen): void{
    const id: number = this.elementosGuardados.length + 1;
    nuevo.id = id;
    this.elementosGuardados.push(nuevo);
  }

  public borrarElemento(pos: number): void{
    this.elementosGuardados.splice(pos,1);
    console.log('la posicion es', pos)

  }

}




