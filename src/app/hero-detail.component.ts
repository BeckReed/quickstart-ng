import 'rxjs/add/operator/switchMap';
import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from './Hero';

import {HeroService} from './hero.service';

@Component({
    selector:'hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls:['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input() hero:Hero;

    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location:Location
    ){}

    ngOnInit():void{
        this.route.params
            .switchMap((params:Params)=>
            this.heroService.getHero(+params['id']))
                .subscribe(hero => this.hero=hero);
        //英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。            
    }

    goBack():void{
        console.log(this.location);
        this.location.back();
    }

    save(): void{
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
