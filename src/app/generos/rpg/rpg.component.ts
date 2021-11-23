import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  games: any = [
    {title: '', image: './assets/rpg/darkSoulsIII_460x215.jpg', desc: 'R$0,00'},
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
