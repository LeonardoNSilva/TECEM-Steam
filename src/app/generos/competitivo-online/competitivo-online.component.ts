import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitivo-online',
  templateUrl: './competitivo-online.component.html',
  styleUrls: ['./competitivo-online.component.css']
})
export class CompetitivoOnlineComponent implements OnInit {

  games: any = [
    {title: 'Age of Empires IV', image: './assets/competitivo-online/ageofempiresIV_460x215.jpg', desc: 'R$199,99'},
    {title: 'Albion Online', image: './assets/competitivo-online/albionOnline_460x215.jpg', desc: 'Gratuito'},
    {title: 'Counter-Strike', image: './assets/competitivo-online/counterStrike_460x215.jpg', desc: 'R$20,69'},
    {title: 'Crab Game', image: './assets/competitivo-online/crabGame_460x215.jpg', desc: 'Gratuito'},
    {title: 'FOR HONOR™', image: './assets/competitivo-online/forHonor_460x215.jpg', desc: 'R$44,99'},
    {title: 'Goose Goose Duck', image: './assets/competitivo-online/gooseGooseDuck_460x215.jpg', desc: 'Gratuito'},
    {title: 'MIR4', image: './assets/competitivo-online/mir4_460x215.jpg', desc: 'Gratuito'},
    {title: 'Mortal Kombat 11', image: './assets/competitivo-online/mortalKombat11_460x215.jpg', desc: 'R$159,99'},
    {title: 'Mount & Blade II: Bannerlord', image: './assets/competitivo-online/mountEBladeIIBannerlord_460x215.jpg', desc: 'R$149,99'},
    {title: 'Nickelodeon All-Star Brawl', image: './assets/competitivo-online/nickelodeonAllStarBrawl_460x215.jpg', desc: 'R$93,99'},
    {title: 'Paladins®', image: './assets/competitivo-online/paladins_460x215.jpg', desc: 'Gratuito'},
    {title: "Tom Clancy's Rainbow Six® Siege", image: './assets/competitivo-online/rainbowsixsiege_460x215.jpg', desc: 'R$59,99'},
    {title: 'Super Animal Royale', image: './assets/competitivo-online/superAnimalRoyale_460x215.jpg', desc: 'Gratuito'},
    {title: 'TEKKEN 7', image: './assets/competitivo-online/tekken7_460x215.jpg', desc: 'R$129,90'},
    {title: 'Unturned', image: './assets/competitivo-online/unturned_460x215.jpg', desc: 'Gratuito'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
