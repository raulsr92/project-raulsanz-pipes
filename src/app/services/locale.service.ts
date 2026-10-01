import { Injectable, signal } from '@angular/core';

//✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧ TYPES
  export type AvailableLocale = 'es-PE'|'pt'|'en'

@Injectable({
  providedIn: 'root',
})
export class LocaleService {

  //▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ Signals

    private currentLocale = signal<AvailableLocale>('es-PE')

  //▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ Constructor

    constructor(){
      this.currentLocale.set(localStorage.getItem('locale') as AvailableLocale ?? 'es-PE' )
    }

  //▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ Métodos

    get getLocale(){

      return this.currentLocale();
    }

    changeLocale(locale: AvailableLocale){

      this.currentLocale.set(locale)

      localStorage.setItem('locale',locale)

      window.location.reload()

    }




}
