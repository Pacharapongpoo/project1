import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { chick,aogchick,fish,pig } from './hero';
import { CHICK,aogCHICK,FISH,PIG } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<chick[]> {
    const heroes = of(CHICK);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<chick> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = CHICK.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getaogChick(): Observable<aogchick[]> {
    const heroes = of(aogCHICK);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getAogChick(id: number): Observable<aogchick> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = aogCHICK.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}