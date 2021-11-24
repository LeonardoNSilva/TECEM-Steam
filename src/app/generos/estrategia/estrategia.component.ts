import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrategia',
  templateUrl: './estrategia.component.html',
  styleUrls: ['./estrategia.component.css']
})
export class EstrategiaComponent implements OnInit {

  games: any = [
    {title: '60 Seconds!', image: './assets/estrategia/60Seconds_460x215.jpg', desc: 'R$16,99'},
    {title: 'Age of Empires IV', image: './assets/estrategia/ageOfEmpiresIV_460x215.jpg', desc: 'R$199,99'},
    {title: 'Crusader Kings III', image: './assets/estrategia/crusaderKingsIII_460x215.jpg', desc: 'R$93,99'},
    {title: 'Darkest Dungeon®', image: './assets/estrategia/darkestDungeon_460x215.jpg', desc: 'R$45,99'},
    {title: 'Factory Town', image: './assets/estrategia/factoryTown_460x215.jpg', desc: 'R$18,99'},
    {title: 'Hades', image: './assets/estrategia/hades_460x215.jpg', desc: 'R$47,49'},
    {title: 'Hammerting', image: './assets/estrategia/hammerting_460x215.jpg', desc: 'R$40,19'},
    {title: 'Inscryption', image: './assets/estrategia/inscryption_460x215.jpg', desc: 'R$49,99'},
    {title: "Let's Build a Zoo", image: './assets/estrategia/letsBuildAZoo_460x215.jpg', desc: 'R$37,99'},
    {title: 'Myth of Empires', image: './assets/estrategia/mythOfEmpires_460x215.jpg', desc: 'R$52,19'},
    {title: 'Plague Inc: Evolved', image: './assets/estrategia/plagueIncEvolved_460x215.jpg', desc: 'R$27,99'},
    {title: 'RimWorld', image: './assets/estrategia/rimWorld_460x215.jpg', desc: 'R$65,99'},
    {title: 'Suspects: Mystery Mansion', image: './assets/estrategia/suspectsMysteryMansion_460x215.jpg', desc: 'R$10,89'},
    {title: 'Tavern Master', image: './assets/estrategia/tavernMaster_460x215.jpg', desc: 'R$28,99'},
    {title: 'Yu-Gi-Oh! Duel Links', image: './assets/estrategia/YuGiOhDuelLinks_460x215.jpg', desc: 'Gratuito'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
