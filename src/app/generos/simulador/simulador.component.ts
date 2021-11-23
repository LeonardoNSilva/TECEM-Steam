import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  games: any = [
    {title: 'American Truck Simulator', image: './assets/simulador/americanTruckSimulator_460x215.jpg', desc: 'R$14,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'},
    {title: '', image: './assets//', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
