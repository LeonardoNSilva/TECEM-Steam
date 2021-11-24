import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.css']
})
export class CorridaComponent implements OnInit {

  games: any = [
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'},
    {title: '', image: './assets/corrida/.jpg', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
