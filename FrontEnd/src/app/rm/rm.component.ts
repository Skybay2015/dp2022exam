import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss']
})
export class RmComponent implements OnInit {


  

  dataList:Int1[]=[];
  constructor(private service:Service1Service) { }



  getData():void{
    this.service.getData().subscribe(
      (data)=>{
        this.dataList=data._embedded.datas;
      }
    )
  }
  


  ngOnInit(): void {
    this.getData();
  }
  
  removeSport(sport:Int1){
    this.service.deleteData(sport).subscribe(
      ()=>{
        this.getData();
      }
    )
  }
  

}
