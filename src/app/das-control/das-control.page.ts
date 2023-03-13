import { Component, OnInit } from '@angular/core';
import 'firebase/compat/database';
import { RealtimeDatabaseService } from '../services/realtime-database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-das-control',
  templateUrl: './das-control.page.html',
  styleUrls: ['./das-control.page.scss'],
})
export class DasControlPage implements OnInit {
  public toggleValue: boolean = false;

  data: any;
  data_foco: any;
  data_toggle: any;
  data3: any;

  constructor(private dataService: RealtimeDatabaseService, private alertController: AlertController) { }


  handleToggleClick() {
    this.enviardatos();
    this.presentAlert();
  }

  ngOnInit() {    //Рщдф Ьгтвщ
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
    this.dataService.leerDatos('/mediciones/Foco').subscribe((data_foco) => {
      this.data_foco = data_foco;
    });
   this.dataService.leerDatos('/mediciones/Foco').subscribe((data_toggle) => {
      this.data_toggle = data_toggle;
      this.toggleValue = this.data_toggle; // Actualiza el valor del toggle
  });
   this.dataService.leerDatos('/mediciones/Foco').subscribe((data3) => {
    this.data3 = data3;
  }); 
  }

  enviardatos() {
    if (this.data_foco == false) {
      const ruta = '/mediciones/Foco';
      const datos = true;
      this.dataService.activar_foco(ruta, datos);
    }else if(this.data_foco == true) {
      const ruta = '/mediciones/Foco';
      const datos = false;
      this.dataService.activar_foco(ruta, datos);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: this.currentAlertMessage,
      buttons: ['OK']
    });
    await alert.present();
    alert.onDidDismiss().then(() => {
      //this.currentAlertMessage = '';
      if(this.data_foco == false){
        this.currentAlertMessage = 'Apagado';
      }else{
        this.currentAlertMessage = 'Encendido';
      }
      alert.message = this.currentAlertMessage;

    });
  }
  currentAlertMessage: string = '';

}

/* Inicio */
/* Fin */
