import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrategia',
  templateUrl: './estrategia.component.html',
  styleUrls: ['./estrategia.component.css']
})
export class EstrategiaComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/estrategia/.jpg', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
