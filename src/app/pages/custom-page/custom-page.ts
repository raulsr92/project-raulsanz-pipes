import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { ColorMap } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Raúl Sánchez')

  upperCase = signal(true)

  heroes = signal(heroes)

  colorMap = signal(ColorMap)

  onToggle(){
    this.upperCase.update(prev => !prev)
  }


}
