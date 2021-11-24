import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.css']
})
export class CorridaComponent implements OnInit {

  games: any = [
    {title: 'Assetto Corsa Competizione', image: './assets/corrida/assettoCorsaCompetizione_460x215.jpg', desc: 'R$159,00'},
    {title: 'BeamNG.drive', image: './assets/corrida/beamNGDrive_460x215.jpg', desc: 'R$47,49'},
    {title: 'CarX Drift Racing Online', image: './assets/corrida/carXDriftRacingOnline_460x215.jpg', desc: 'R$28,99'},
    {title: 'Circuit Superstars', image: './assets/corrida/circuitSuperstars_460x215.jpg', desc: 'R$90,00'},
    {title: 'DiRT Rally 2.0', image: './assets/corrida/dirtRally2.0_460x215.jpg', desc: 'R$47,49'},
    {title: 'F1® 2021', image: './assets/corrida/f1_2021_460x215.jpg', desc: 'R$249,00'},
    {title: 'Forza Horizon 5', image: './assets/corrida/forzaHorizon5_460x215.jpg', desc: 'R$249,00'},
    {title: 'HOT WHEELS UNLEASHED™', image: './assets/corrida/hotWheelsUnleashed_460x215.jpg', desc: 'R$109,99'},
    {title: 'Need for Speed™ Heat', image: './assets/corrida/needForSpeedHeat_460x215.jpg', desc: 'R$279,00'},
    {title: 'Need for Speed™ Most Wanted', image: './assets/corrida/needForSpeedMostWanted_460x215.jpg', desc: 'R$59,00'},
    {title: 'RIDE 4', image: './assets/corrida/ride4_460x215.jpg', desc: 'R$93,99'},
    {title: 'SnowRunner', image: './assets/corrida/snowRunner_460x215.jpg', desc: 'R$109,90'},
    {title: 'The Crew™ 2', image: './assets/corrida/theCrew2_460x215.jpg', desc: 'R$149,99'},
    {title: 'Track & Burn', image: './assets/corrida/trackEBurn_460x215.jpg', desc: 'Gratuito'},
    {title: 'Wreckfest', image: './assets/corrida/wreckfest_460x215.jpg', desc: 'R$83,45'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
