import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe, I18nPluralPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //I18n Select Pipe

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

  //I18n Plural Pipe

    clientsMap =signal({
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos 1 cliente esperando.',
    '=2': 'Tenemos 2 clientes esperando.',
    other: 'Tenemos # clientes esperando'
    })

    clients = signal([
      'Raul',
      'Daniel',
      'Amalia',
      'Alvaro',
      'Koki',
      'Andrea',
      'Chio',
      'Paty'
    ])

    deleteClient(){
      this.clients.update( clientsBefore => clientsBefore.slice(0,clientsBefore.length-1))
    }


}
