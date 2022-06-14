import { Component, OnInit } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.scss']
})
export class UpdComponent implements OnInit {

  
  sportList:Int1[]=[];
  selectedItem?:Int1;
  
  constructor(private service:Service1Service) { }




  getData():void{
    this.service.getData().subscribe(
      (data)=>{
        this.sportList=data._embedded.datas;
      }
    )
  }

  onSelect(data:Int1){
    this.selectedItem=data;
  }

  ngOnInit(): void {
    this.getData();
  }

  updData(data:Int1){
    this.service.putData(this.selectedItem!._links.self.href, data).subscribe(
      ()=>{
        this.getData();
      }
    )
  }

}
