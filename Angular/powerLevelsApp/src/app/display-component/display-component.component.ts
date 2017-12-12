import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {

  units: Array<Object> = [
    {name: 'Villager', hitpoints: '25', attack: '3'},
    {name: 'Crossbowman', hitpoints: '35', attack: '5'},
    {name: 'Long Swordsmen', hitpoints: '60', attack: '9'},
    {name: 'Paladin', hitpoints: '160', attack: '14'},
    {name: 'Trebuchet', hitpoints: '150', attack: '200'},
    {name: 'Elite Skirmisher', hitpoints: '35', attack: '3'},
  ]

  @Input() totalUnits ;

  constructor() { }

  ngOnInit() {
  }

}
