import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esporte',
  templateUrl: './esporte.component.html',
  styleUrls: ['./esporte.component.css']
})
export class EsporteComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/esporte/', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
