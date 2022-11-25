import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { fish } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.scss']
})
export class FishDetailComponent implements OnInit {
  hero: fish | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  heroes: fish[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}
