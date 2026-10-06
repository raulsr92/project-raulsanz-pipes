import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

const cliente1={
  name: 'Raul',
  gender: 'male',
  age: 34,
  address: 'Lima, Peru'
}

const cliente2={
  name: 'Alessandra',
  gender: 'female',
  age: 32,
  address: 'Lima, Peru'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //I18n SelectPipe

  client = signal(cliente1)

  invitationMap ={
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient(){
    if (this.client() === cliente1) {
      this.client.set(cliente2)
      return
    }
    this.client.set(cliente1)
  }


}
