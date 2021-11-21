import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.css']
})
export class CorridaComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
