import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private arr: any[] = [
    {
      iName: "Green Apple",
      iPrice: "110",
      iImg: "https://onedaycart.com/odcb/wp-content/uploads/2016/01/19-Amazing-Benefits-Of-Cumin-Jeera-For-Skin-Hair-And-Health.jpg"
    },
    {
      iName: "Orange",
      iPrice: "100",
      iImg: "https://m.media-amazon.com/images/I/51AzriIvcBL._SX342_.jpg" 
    },
    {
      iName: "Papaya",
      iPrice: "90",
      iImg: "https://m.media-amazon.com/images/I/51AzriIvcBL._SX342_.jpg"
      
  }
  ];
  private bagArr: any[] = [
    {
      iPrice: 25,
      iName: "jeera",
      qty: 2,
      total: 50,
    }
  ];  
  dataSubject = new BehaviorSubject<any>(this.arr.slice());
  bagDataSubject = new BehaviorSubject<any>(this.bagArr.slice());

  sendData(data: any[]) {
    this.arr.push({
      iImg: data[1],
      iPrice: data[0].iPrice,
      iName: data[0].iName
    })
    this.dataSubject.next(this.arr.slice())
  }
  
  receivedBagData(bagObj: any) {
    this.bagArr.push(bagObj)
    this.bagDataSubject.next(this.bagArr.slice())
  }
  cardIndex(id:number){
    return this.arr.slice()[id] 
  } 

}
