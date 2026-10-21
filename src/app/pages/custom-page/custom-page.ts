import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';


@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Raúl Sánchez')

  upperCase = signal(true)

  onToggle(){
    this.upperCase.update(prev => !prev)
  }


}
