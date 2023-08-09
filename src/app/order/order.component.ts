import { Component } from '@angular/core';
import { DataService } from '../shared/service/dataService.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  bagDataReceived : any[]=[];
  total : number=0
  constructor(private dataServe:DataService){
    this.dataServe.bagDataSubject.subscribe((param)=>{
      this.bagDataReceived = param
    }) 
  }
  ngOnInit(): void {   
  } 
  deleteAction(index:number) {
    this.bagDataReceived.splice(index, 1);
  }
  calculateTotal(): number {
    return this.bagDataReceived.reduce((total, item) => total +item.iPrice*item.qty, 0);
  }
}
