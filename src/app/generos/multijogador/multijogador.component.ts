import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multijogador',
  templateUrl: './multijogador.component.html',
  styleUrls: ['./multijogador.component.css']
})
export class MultijogadorComponent implements OnInit {

  games: any = [
    {title: 'Back 4 Blood', image: './assets/multijogador/back4blood_616x353.jpg', desc: 'R$195,99'},
    {title: 'Black Desert Online SA', image: './assets/multijogador/blackDesertOnlineSA_460x215.jpg', desc: 'R$17,46'},
    {title: 'DEVOUR', image: './assets/multijogador/devour_460x215.jpg', desc: 'R$10,89'},
    {title: 'Hunt: Showdown', image: './assets/multijogador/huntShowdown_460x215.jpg', desc: 'R$65,40'},
    {title: 'NARAKA: BLADEPOINT', image: './assets/multijogador/narakaBladepoint_460x215.jpg', desc: 'R$80,00'},
    {title: 'Phasmophobia', image: './assets/multijogador/phasmophobia_460x215.jpg', desc: 'R$27,89'},
    {title: 'RuneScape ®', image: './assets/multijogador/runeScape_460x215.jpg', desc: 'Gratuito'},
    {title: 'Sea of Thieves', image: './assets/multijogador/seaOfThieves_460x215.jpg', desc: 'R$89,99'},
    {title: 'SMITE®', image: './assets/multijogador/smite_460x215.jpg', desc: 'Gratuito'},
    {title: 'STAR WARS™: The Old Republic™', image: './assets/multijogador/starWarsTheOldRepublic_460x215.jpg', desc: 'Gratuito'},
    {title: 'Team Fortress 2', image: './assets/multijogador/teamFortress2_460x215.jpg', desc: 'Gratuito'},
    {title: 'The Lord of the Rings Online™', image: './assets/multijogador/theLordOfTheRingsOnline_460x215.jpg', desc: 'Gratuito'},
    {title: 'Trove', image: './assets/multijogador/trove_460x215.jpg', desc: 'Gratuito'},
    {title: 'Valheim', image: './assets/multijogador/valheim_460x215.jpg', desc: 'R$37,99'},
    {title: 'World of Warships', image: './assets/multijogador/worldOfWarships.jpg', desc: 'Gratuito'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
