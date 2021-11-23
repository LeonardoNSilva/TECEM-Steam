import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.css']
})
export class AventuraComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/aventura/', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
