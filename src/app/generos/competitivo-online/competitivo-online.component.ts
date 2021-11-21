import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitivo-online',
  templateUrl: './competitivo-online.component.html',
  styleUrls: ['./competitivo-online.component.css']
})
export class CompetitivoOnlineComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
