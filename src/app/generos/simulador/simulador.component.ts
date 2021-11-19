import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
