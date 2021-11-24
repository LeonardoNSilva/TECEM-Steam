import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.css']
})
export class CasualComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'},
    {title: '', image: 'src/assets/casual/.jpg', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
