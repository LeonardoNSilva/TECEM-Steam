import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  games: any = [
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'},
    {title: '', image: 'src/assets/acao/', desc: 'R$0,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
