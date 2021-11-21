import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esporte',
  templateUrl: './esporte.component.html',
  styleUrls: ['./esporte.component.css']
})
export class EsporteComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
