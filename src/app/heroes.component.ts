import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './Hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

  getHeroes(): void {
    //this.heroes=this.heroService.getHeroes();    
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h != hero);//避免重新请求数据刷洗列表的方法
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

}
