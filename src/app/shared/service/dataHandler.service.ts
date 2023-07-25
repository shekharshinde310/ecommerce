import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataHandler {
    private arr: any[] = [
        {
            itemName: "Green Apple",
            itemPrice: "110",
            pImg: "https://onedaycart.com/odcb/wp-content/uploads/2016/01/19-Amazing-Benefits-Of-Cumin-Jeera-For-Skin-Hair-And-Health.jpg"
        },
        {
            itemName: "Orange",
            itemPrice: "100",
            pImg: "https://m.media-amazon.com/images/I/51AzriIvcBL._SX342_.jpg"
            
        },
        {
            itemName: "Papaya",
            itemPrice: "90",
            pImg: "https://m.media-amazon.com/images/I/51AzriIvcBL._SX342_.jpg"
            
        }
    ];
    private bagArr: any[] = [
        {
            itemPrice: 110,
            itemName: "Apple",
            qty: 2,
            total: 220,
        }
    ];
    dataSubject = new BehaviorSubject<any>(this.arr.slice());
    bagDataSubject = new BehaviorSubject<any>(this.bagArr.slice());

    sendData(data: any[]) {
        this.arr.push({
            itemImg: data[1],
            itemPrice: data[0].price,
            name: data[0].name
        })
        this.dataSubject.next(this.arr.slice())
    }

    receivedBagData(bagObj: any) {
        this.bagArr.push(bagObj)
        this.bagDataSubject.next(this.bagArr.slice())
    }
    cardIndex(id: number) {
        return this.arr.slice()[id]
    }

}