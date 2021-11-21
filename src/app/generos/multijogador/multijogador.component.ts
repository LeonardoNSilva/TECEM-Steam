import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multijogador',
  templateUrl: './multijogador.component.html',
  styleUrls: ['./multijogador.component.css']
})
export class MultijogadorComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
