import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarImagenComponent } from './componentes/mostrar-imagen/mostrar-imagen.component';
import { PokemonComponent } from './componentes/pokemon/pokemon.component';
import { ListarPokemonComponent } from './componentes/listar-pokemon/listar-pokemon.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarImagenComponent,
    PokemonComponent,
    ListarPokemonComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
