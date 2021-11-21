import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.css']
})
export class AventuraComponent implements OnInit {

  games: any = [
    {title: 'Forza', image: '', desc: 'blallbalblala'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
