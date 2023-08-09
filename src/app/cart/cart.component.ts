import { Component, ViewChild } from '@angular/core';
import { DataService } from '../shared/service/dataService.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  recievedData: any;
  dataVar: any;
  counter: number = 1;


  @ViewChild('one') one: any;
  constructor(private dataServe: DataService) {
    this.dataServe.dataSubject.subscribe((res) => {
      this.recievedData = res
    })
  }
  onBtnClick(eve: any) {
    if (eve.target.id === 'minus') {
      eve.target.nextElementSibling.value > 1 ? this.counter = --eve.target.nextElementSibling.value : this.counter = eve.target.nextElementSibling.value = 1;
    }
    else {
      this.counter = ++eve.target.previousElementSibling.value;
    }
  }
  addToCart(i: number) {
    let cardVar = this.dataServe.cardIndex(i)
    this.dataServe.receivedBagData({ iName: cardVar.iName, iImg: cardVar.ImgPath, iPrice: cardVar.iPrice, qty: this.counter })
  }
}
