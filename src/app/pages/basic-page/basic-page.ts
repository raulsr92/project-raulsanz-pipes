import { Component, effect, signal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  //Signals

    nameLower= signal('Raúl Sanchez')
    nameUpper= signal('RAUL')
    fullName = signal('rAvL sAnCheZ')

    customDate = signal( new Date())

  //Signal effect

    tickingDateEffect = effect((onCleanup)=>{

      const interval = setInterval(()=>{
        this.customDate.set(new Date())
        console.log("tic tac")
      },1000)

      onCleanup(()=>{
        console.log('Destruyendo intervalo')
        clearInterval(interval)
      })

    })

}
