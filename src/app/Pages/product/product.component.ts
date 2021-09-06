import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  addeditems = new Array();
  products = [
    {
      header:'Audi Q1',
      description: 'Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.',
      amount: '$6700',
      src:'../../../../assets/images/1.jpg'
    },
    {
      header:'Audi Q2',
      description: 'Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.',
      amount: '$6701',
      src:'../../../../assets/images/2.jpg'
    },
    {
      header:'Audi Q3',
      description: 'Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.',
      amount: '$6702',
      src:'../../../../assets/images/3.jpg'
    }
  ]
  constructor() { }
  mailBody: any;
  name: any;

  ngOnInit(): void {
    this.mailBody = ""
    
  }
  addedlist(event:any){
    this.addeditems.push(event);
    console.log(event);
  }
  onDelete(i:any){
    this.addeditems.forEach((value,index)=>{
      if(value==i) this.addeditems.splice(index,1);
  });
  }

  check(i:any,val:any){
    this.addeditems.forEach((value,index)=>{
      if(value==event) console.log('gt')
  });
  }
  //saveitems(header:any,amount:any,val:number){
  //   this.addeditems.forEach((value,index)=>{
  //     console.log(value);
  //     if(value.headerval == header) value.quantity=val;
  // });
  //}
  saveitems(){

  }

  finalOutput() {
    this.addeditems.forEach(element => {
     this.mailBody=this.mailBody+element.headerval+"   "+element.quantity+"%0d%0a"
    });
    console.log(this.addeditems);
  }
  

}
