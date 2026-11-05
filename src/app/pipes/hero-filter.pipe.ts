
import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter'
})

export class HeroFilterPipe implements PipeTransform {

  transform(heroes: Hero[], search: string): Hero[] {

    if (!search) return heroes;

    const searchLowerCase = search.toLocaleLowerCase()

    return heroes.filter((heroe)=> heroe.name.toLocaleLowerCase().includes(searchLowerCase));
  }
}

