import { Component, signal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  //Signals

    nameLower= signal('Raúl Sanchez')
    nameUpper= signal('RAUL')
    fullName = signal('rAvL sAnCheZ')

}
