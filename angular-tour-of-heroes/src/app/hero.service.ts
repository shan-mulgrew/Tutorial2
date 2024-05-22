import { Injectable } from '@angular/core';
import { Hero  } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

//Services are where we should retrieve data, componenets should not look after 
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
