import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products = [
    {
      header:'Audi Q1',
      description: 'Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.',
      amount: '$6700',
      src:'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      header:'Audi Q2',
      description: 'Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.',
      amount: '$6700',
      src:'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      header:'Audi Q3',
      description: 'Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.',
      amount: '$6700',
      src:'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
