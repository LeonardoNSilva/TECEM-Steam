import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrategia',
  templateUrl: './estrategia.component.html',
  styleUrls: ['./estrategia.component.css']
})
export class EstrategiaComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
