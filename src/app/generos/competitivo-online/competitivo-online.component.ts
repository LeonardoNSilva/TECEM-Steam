import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitivo-online',
  templateUrl: './competitivo-online.component.html',
  styleUrls: ['./competitivo-online.component.css']
})
export class CompetitivoOnlineComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/competitivo-online/.jpg', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
