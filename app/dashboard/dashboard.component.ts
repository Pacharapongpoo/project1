import { Component, OnInit } from '@angular/core';
import { aogchick, chick, fish, pig } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chicks: chick[] = [];
  aogchicks: aogchick[] = [];
  fishs: fish[] = [];
  pigs: pig[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getaogChick();
    this.getFISH();
    this.getPIG();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(chicks => this.chicks = chicks.slice(0, 5));
  }

  getaogChick(): void {
    this.heroService.getaogChick()
      .subscribe(aogchicks => this.aogchicks = aogchicks.slice(0, 5));
  }

  getFISH(): void {
    this.heroService.getaogChick()
      .subscribe(fishs => this.fishs = fishs.slice(0, 5));
  }

  getPIG(): void {
    this.heroService.getaogChick()
      .subscribe(pigs => this.pigs = pigs.slice(0, 5));
  }

  tiles: Tile[] = [
    { cols: 4, rows: 2,},
  ];
}

export class CardFancyExample { }

export class GridListOverviewExample { }

export class MenuNestedExample { }

export interface Tile {
  cols: number;
  rows: number;
}