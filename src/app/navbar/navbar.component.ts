import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rotas: any = [
    {rota: 'acao'},
    {rota: 'aventura'},
    {rota: 'casual'},
    {rota: 'competitivo-online'},
    {rota: 'corrida'},
    {rota: 'esporte'},
    {rota: 'estrategia'},
    {rota: 'multijogador'},
    {rota: 'rpg'},
    {rota: 'simulador'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
