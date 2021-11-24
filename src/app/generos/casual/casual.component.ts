import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.css']
})
export class CasualComponent implements OnInit {

  games: any = [
    {title: 'Among Us', image: './assets/casual/amongUs_460x215.jpg', desc: 'R$10,89'},
    {title: 'Bloons TD 6', image: './assets/casual/bloonsTD6_460x215.jpg', desc: 'R$20,69'},
    {title: 'Castle Crashers®', image: './assets/casual/castleCrashers_460x215.jpg', desc: 'R$24,99'},
    {title: 'Fall Guys: Ultimate Knockout', image: './assets/casual/fallGuys_460x215.jpg', desc: 'R$37,99'},
    {title: 'Gang Beasts', image: './assets/casual/gangBeasts_460x215.jpg', desc: 'R$36,99'},
    {title: 'Human: Fall Flat', image: './assets/casual/humanFallFlat_460x215.jpg', desc: 'R$37,99'},
    {title: 'Kingdom Two Crowns', image: './assets/casual/kingdomTwoCrowns_460x215.jpg', desc: 'R$37,99'},
    {title: 'Magicka 2', image: './assets/casual/magicka2_460x215.jpg', desc: 'R$27,99'},
    {title: 'Pummel Party', image: './assets/casual/pummelParty_460x215.jpg', desc: 'R$28,99'},
    {title: 'Ruined King: A League of Legends Story™', image: './assets/casual/ruinedKing_460x215.jpg', desc: 'R$69,99'},
    {title: 'Stick Fight: The Game', image: './assets/casual/stickFight_460x215.jpg', desc: 'R$10,49'},
    {title: 'Terraria', image: './assets/casual/terraria_460x215.jpg', desc: 'R$9,99'},
    {title: 'The Pathless', image: './assets/casual/thePathless_460x215.jpg', desc: 'R$82,99'},
    {title: 'UNO', image: './assets/casual/uno_460x215.jpg', desc: 'R$29,99'},
    {title: 'Worms W.M.D', image: './assets/casual/wormsWMD_460x215.jpg', desc: 'R$79,90'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
