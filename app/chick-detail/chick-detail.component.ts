import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { chick } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-chick-detail',
  templateUrl: './chick-detail.component.html',
  styleUrls: [ './chick-detail.component.scss' ]
})
export class ChickDetailComponent implements OnInit {
  hero: chick | undefined;

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

  heroes: chick[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}