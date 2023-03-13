import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { RealtimeDatabaseService } from 'src/app/services/realtime-database.service';

@Component({
  selector: 'app-contrrol-iot',
  templateUrl: './contrrol-iot.component.html',
  styleUrls: ['./contrrol-iot.component.scss'],
})
export class ContrrolIotComponent implements OnInit {

  seccion: 'temp' | 'contr' | 'hist' = 'temp';
  mediciones: Mediciones[] = [];

  data: any;
  /*seccion: any;*/

  umbral: number = 25;
  database: any;
  version: any;


  constructor(private dataService: RealtimeDatabaseService) {

   }

  ngOnInit() {

    this.dataService.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data)
    })

  }

rangeChange(ev: any) {
  this.umbral = ev.detail.value;
  console.log('ev.detail.value -> ', ev.detail.value);
  const path = 'Foco';
  this.database.object(path).set(this.umbral);
  
}



}
interface Mediciones{
  sensor: number;
  time: number;
}

