import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor() { }
  mailBody: any;
  name: any;

  ngOnInit(): void {
    this.mailBody = "Product%20paper"
    this.name = "Name";
  }

}
