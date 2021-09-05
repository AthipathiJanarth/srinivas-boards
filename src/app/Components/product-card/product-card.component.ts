import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input()  product:any;
  products =new Array;
  @Output() sendList = new EventEmitter();

  ngOnInit(): void {
    console.log(this.product.length)
  }

  onPurchase(header :any,amount:any){
    let headerval=header.innerText;
    let amountval=amount.innerText;
    let item = {headerval,amountval};
    //this.products.push(item);
    this.sendList.emit(item);
  }

}
