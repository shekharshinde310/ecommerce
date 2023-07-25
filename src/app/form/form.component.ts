import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataHandler } from '../shared/service/dataHandler.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formObj: FormGroup | any;
  file: File | any;
  maxSize: number = 100 * 1024;
  imgUrl: any;

  constructor(private dataServe: DataHandler) { }

  ngOnInit(): void {
    this.formObj = new FormGroup({
      itemName: new FormControl(null, Validators.required),
      itemPrice: new FormControl(null, Validators.required),
      ImgPath: new FormControl(null, [Validators.required])
    })
  }

  validateImage(event: any) {
    const file: File = event.target.files[0];
    const fileSize: number = file.size;
    const maxSize: number = 100 * 1024;

    if (fileSize > maxSize) {
      alert('Image size exceeds the allowed limit of 100 KB.');
    } else {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    this.dataServe.sendData([this.formObj.value, this.imgUrl]);
    this.formObj.reset();
  }
}
