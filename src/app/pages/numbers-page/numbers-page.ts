import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {

  //Signals

    totalSells = signal(2_020_239.5567)

    percent = signal(0.4856)
}
