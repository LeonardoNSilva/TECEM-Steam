import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.css']
})
export class CasualComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
