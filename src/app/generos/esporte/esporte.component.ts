import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esporte',
  templateUrl: './esporte.component.html',
  styleUrls: ['./esporte.component.css']
})
export class EsporteComponent implements OnInit {

  games: any = [
    {title: 'Descenders', image: './assets/esporte/descenders_460x215.jpg', desc: 'R$47,49'},
    {title: 'eFootball PES 2021 SEASON UPDATE', image: './assets/esporte/eFootballPES2021_460x215.jpg', desc: 'Gratuito'},
    {title: 'F1® 2020', image: './assets/esporte/f12020_460x215.jpg', desc: 'R$109,99'},
    {title: 'FIFA 22', image: './assets/esporte/fifa22_460x215.jpg', desc: 'R$149,40'},
    {title: 'Fishing Planet', image: './assets/esporte/fishingPlanet_460x215.jpg', desc: 'Gratuito'},
    {title: 'Golf It!', image: './assets/esporte/golfIt_460x215.jpg', desc: 'R$17,99'},
    {title: 'Knockout City™', image: './assets/esporte/knockoutCity_460x215.jpg', desc: 'R$99,00'},
    {title: 'Madden NFL 22', image: './assets/esporte/maddenNFL22_460x215.jpg', desc: 'R$124,50'},
    {title: 'MotoGP™21', image: './assets/esporte/motoGP21_460x215.jpg', desc: 'R$93,99'},
    {title: 'NBA 2K20', image: './assets/esporte/nba2k20_460x215.jpg', desc: 'R$119,00'},
    {title: 'NBA 2K22', image: './assets/esporte/nba2k22_460x215.jpg', desc: 'R$299,90'},
    {title: 'PGA TOUR 2K21', image: './assets/esporte/pgaTour2k21.jpg', desc: 'R$249,90'},
    {title: 'RIDE 4', image: './assets/esporte/ride4_460x215.jpg', desc: 'R$93,99'},
    {title: 'WWE 2K19', image: './assets/esporte/wwe2k19_460x215.jpg', desc: 'R$119,00'},
    {title: 'WWE 2K20', image: './assets/esporte/wwe2K20_460x215.jpg', desc: 'R$119,00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
