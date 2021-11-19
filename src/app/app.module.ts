import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AcaoComponent } from './generos/acao/acao.component';
import { RpgComponent } from './generos/rpg/rpg.component';
import { EstrategiaComponent } from './generos/estrategia/estrategia.component';
import { AventuraComponent } from './generos/aventura/aventura.component';
import { CasualComponent } from './generos/casual/casual.component';
import { SimuladorComponent } from './generos/simulador/simulador.component';
import { EsporteComponent } from './generos/esporte/esporte.component';
import { CorridaComponent } from './generos/corrida/corrida.component';
import { MultijogadorComponent } from './generos/multijogador/multijogador.component';
import { CompetitivoOnlineComponent } from './generos/competitivo-online/competitivo-online.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcaoComponent,
    RpgComponent,
    EstrategiaComponent,
    AventuraComponent,
    CasualComponent,
    SimuladorComponent,
    EsporteComponent,
    CorridaComponent,
    MultijogadorComponent,
    CompetitivoOnlineComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
