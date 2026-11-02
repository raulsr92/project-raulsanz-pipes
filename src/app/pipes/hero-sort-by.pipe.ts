
import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy'
})

export class HeroSortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | null ): Hero[] {

    if(!sortBy) return heroes

    switch(sortBy){
      case "name":{
        return heroes.sort((a,b)=>{
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if(nameA < nameB){
            return -1
          }
          if(nameA > nameB){
            return 1
          }
          return 0
        })
      };

      case "color":{
        return heroes.sort((a,b)=>a.color-b.color)
      }

      case "creator":{
        return heroes.sort((a,b)=>a.creator-b.creator)
      }

      case "canFly":{
        return heroes.sort((a,b)=> Number(b.canFly) - Number(a.canFly))
      }

      default:
        return heroes
    }
  }
}

/*

    return heroes.sort((a,b)=>{
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if(nameA < nameB){
        return -1
      }
      if(nameA > nameB){
        return 1
      }

      return 0
    })
      */
