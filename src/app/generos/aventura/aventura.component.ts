import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.css']
})
export class AventuraComponent implements OnInit {

  games: any = [
    {title: 'ARK: Survival Evolved', image: './assets/aventura/arkSurvivalEvolved_460x215.jpg', desc: 'R$57,99'},
    {title: 'Barotrauma', image: './assets/aventura/barotrauma_460x215.jpg', desc: 'R$57,99'},
    {title: 'Beyond: Two Souls', image: './assets/aventura/beyondTwoSouls_460x215.jpg', desc: 'R$64,99'},
    {title: 'Bug Fables: O Broto da Eternidade', image: './assets/aventura/bugFables_460x215.jpg', desc: 'R$37,99'},
    {title: 'Conan Exiles', image: './assets/aventura/conanExiles_460x215.jpg', desc: 'R$99,49'},
    {title: 'DayZ', image: './assets/aventura/dayZ_460x215.jpg', desc: 'R$119,99'},
    {title: 'DEATH STRANDING', image: './assets/aventura/deathStranding_460x215.jpg', desc: 'R$71,70'},
    {title: "Don't Starve Together", image: './assets/aventura/dontStarveTogether_460x215.jpg', desc: 'R$9,51'},
    {title: 'Life is Strange: True Colors', image: './assets/aventura/lifeIsStrangeTrueColors_460x215.jpg', desc: 'R$194,93'},
    {title: 'Project Zomboid', image: './assets/aventura/projectZomboid_460x215.jpg', desc: 'R$24,98'},
    {title: 'Raft', image: './assets/aventura/raft_460x215.jpg', desc: 'R$36,99'},
    {title: 'Red Dead Redemption 2', image: './assets/aventura/redDeadRedemptionII_460x215.jpg', desc: 'R$239,00'},
    {title: 'Risk of Rain 2', image: './assets/aventura/riskOfRain2_460x215.jpg', desc: 'R$59,99'},
    {title: 'Rust', image: './assets/aventura/rust_460x215.jpg', desc: 'R$93,49'},
    {title: 'The Forest', image: './assets/aventura/theForest_460x215.jpg', desc: 'R$37,99'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
