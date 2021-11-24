import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  games: any = [
    {title: 'Apex Legends™', image: './assets/acao/apexLegends_460x215.jpg', desc: 'Gratuito'},
    {title: 'Arma 3', image: './assets/acao/arma3_460x215.jpg', desc: 'R$24,99'},
    {title: 'Back 4 Blood', image: './assets/acao/back4blood_460x215.jpg', desc: 'R$195,99'},
    {title: 'Battlefield 4™', image: './assets/acao/battlefield4_460x215.jpg', desc: 'R$199,00'},
    {title: 'BioShock Infinite', image: './assets/acao/bioShockInfinite_460x215.jpg', desc: 'R$89,99'},
    {title: 'Counter-Strike: Global Offensive', image: './assets/acao/csgo_460x215.jpg', desc: 'Gratuito'},
    {title: 'Dead by Daylight', image: './assets/acao/deadByDaylight_460x215.jpg', desc: 'R$39,99'},
    {title: 'DOOM Eternal', image: './assets/acao/doomEternal_460x215.jpg', desc: 'R$199,00'},
    {title: 'Grand Theft Auto V', image: './assets/acao/gtaV_460x215.jpg', desc: 'R$66,67'},
    {title: 'Halo Infinite', image: './assets/acao/haloInfinite_460x215.jpg', desc: 'Gratuito'},
    {title: 'Insurgency: Sandstorm', image: './assets/acao/insurgency_460x215.jpg', desc: 'R$79,90'},
    {title: 'Just Cause™ 3', image: './assets/acao/justcause3_460x215.jpg', desc: 'R$6,44'},
    {title: 'PUBG: BATTLEGROUNDS', image: './assets/acao/pubg_460x215.jpg', desc: 'R$75,00'},
    {title: 'Tom Clancy’s Splinter Cell Blacklist', image: './assets/acao/tomClancysSplinterCellBlacklist_460x215.jpg', desc: 'R$89,99'},
    {title: 'World War Z: Aftermath', image: './assets/acao/worldWarZ_460x215.jpg', desc: 'R$75,49'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
