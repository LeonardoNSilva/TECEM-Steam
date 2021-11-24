import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  games: any = [
    {title: 'American Truck Simulator', image: './assets/simulador/americanTruckSimulator_460x215.jpg', desc: 'R$14,00'},
    {title: 'Car Mechanic Simulator 2021', image: './assets/simulador/carMechanicSimulator2021_460x215.jpg', desc: 'R$47,49'},
    {title: 'Cities Skylines', image: './assets/simulador/citiesSkylines_460x215.jpg', desc: 'R$55,99'},
    {title: 'Euro Truck Simulator 2', image: './assets/simulador/euroTruckSimulator2_460x215.jpg', desc: 'R$39,99'},
    {title: 'Farming Simulator 22', image: './assets/simulador/farmingSimulator22_460x215.jpg', desc: 'R$159,00'},
    {title: 'iRacing', image: './assets/simulador/iRacing_460x215.jpg', desc: 'R$24,99'},
    {title: 'Jurassic World Evolution 2', image: './assets/simulador/jurassicWorldEvolution2_460x215.jpg', desc: 'R$109,99'},
    {title: 'Microsoft Flight Simulator', image: './assets/simulador/microsoftFlightSimulator_460x215.jpg', desc: 'R$249,95'},
    {title: 'Motorcycle Mechanic Simulator 2021', image: './assets/simulador/motorcycleMechanicSimulator2021_460x215.jpg', desc: 'R$25,39'},
    {title: 'Satisfactory', image: './assets/simulador/satisfactory_460x215.jpg', desc: 'R$41,99'},
    {title: 'Sid Meier’s Civilization® VI', image: './assets/simulador/sidMeiersCivilizationVI_460x215.jpg', desc: 'R$129,00'},
    {title: 'Stardew Valley', image: './assets/simulador/stardewValley_460x215.jpg', desc: 'R$24,99'},
    {title: 'Tabletop Simulator', image: './assets/simulador/tabletopSimulator_460x215.jpg', desc: 'R$36,99'},
    {title: 'The Sims™ 4', image: './assets/simulador/theSims4_460x215.jpg', desc: 'R$159,00'},
    {title: 'War Thunder', image: './assets/simulador/warThunder_460x215.jpg', desc: 'Gratuito'}
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
