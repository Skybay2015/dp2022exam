import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  dataList:Int1[]=[];
  
  constructor(private service:Service1Service) { }


  ngOnInit(): void {
    
  }

  getData():void{
    this.service.getData().subscribe(
      (data)=>{
        this.dataList=data._embedded.datas;
      }
    )
  }

  addData(data:Int1){
    this.service.postData(data).subscribe(
      ()=>{
        this.getData();
      }
    )
  }

}
