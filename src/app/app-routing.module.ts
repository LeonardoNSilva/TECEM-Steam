import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoComponent } from './generos/acao/acao.component';
import { AventuraComponent } from './generos/aventura/aventura.component';
import { CasualComponent } from './generos/casual/casual.component';
import { CompetitivoOnlineComponent } from './generos/competitivo-online/competitivo-online.component';
import { CorridaComponent } from './generos/corrida/corrida.component';
import { EsporteComponent } from './generos/esporte/esporte.component';
import { EstrategiaComponent } from './generos/estrategia/estrategia.component';
import { MultijogadorComponent } from './generos/multijogador/multijogador.component';
import { RpgComponent } from './generos/rpg/rpg.component';
import { SimuladorComponent } from './generos/simulador/simulador.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'acao', component: AcaoComponent},
  {path: 'aventura', component: AventuraComponent},
  {path: 'casual', component: CasualComponent},  
  {path: 'competitivo-online', component: CompetitivoOnlineComponent},
  {path: 'corrida', component: CorridaComponent},
  {path: 'esporte', component: EsporteComponent},
  {path: 'estrategia', component: EstrategiaComponent},
  {path: 'multijogador', component: MultijogadorComponent},
  {path: 'rpg', component: RpgComponent},
  {path: 'simulador', component: SimuladorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
