import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  games: any = [
    {title: 'DARK SOULS™ III', image: './assets/rpg/darkSoulsIII_460x215.jpg', desc: 'R$159,90'},
    {title: 'Destiny 2', image: './assets/rpg/destiny2_460x215.jpg', desc: 'Gratuito'},
    {title: 'ELDEN RING', image: './assets/rpg/eldenRing_460x215.jpg', desc: 'R$249,90'},
    {title: 'Fallout 4', image: './assets/rpg/fallout4_460x215.jpg', desc: 'R$59,99'},
    {title: 'FINAL FANTASY XIV Online', image: './assets/rpg/finalFantasyXIVOnline_460x215.jpg', desc: 'R$52,99'},
    {title: 'GrandChase', image: './assets/rpg/grandChase_460x215.jpg', desc: 'Gratuito'},
    {title: 'Lost Ark', image: './assets/rpg/lostArk_460x215.jpg', desc: 'R$83,49'},
    {title: 'Monster Hunter: World', image: './assets/rpg/monsterHunterWorld_460x215.jpg', desc: 'R$69,99'},
    {title: 'New World', image: './assets/rpg/newWorld_460x215.jpg', desc: 'R$75,49'},
    {title: 'OUTRIDERS', image: './assets/rpg/outriders_460x215.jpg', desc: 'R$92,36'},
    {title: 'Path of Exile', image: './assets/rpg/pathOfExile_460x215.jpg', desc: 'Gratuito'},
    {title: 'Tales of Arise', image: './assets/rpg/talesOfArise_460x215.jpg', desc: 'R$249,49'},
    {title: 'The Elder Scrolls® Online', image: './assets/rpg/theElderScrollsOnline_460x215.jpg', desc: 'R$61,50'},
    {title: 'The Elder Scrolls V: Skyrim Special Edition', image: './assets/rpg/theElderScrollsVSkyrim_460x215.jpg', desc: 'R$149,00'},
    {title: 'Warframe', image: './assets/rpg/warframe_460x215.jpg', desc: 'Gratuito'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
