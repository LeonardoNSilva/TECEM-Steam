import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multijogador',
  templateUrl: './multijogador.component.html',
  styleUrls: ['./multijogador.component.css']
})
export class MultijogadorComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/multijogador/', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
