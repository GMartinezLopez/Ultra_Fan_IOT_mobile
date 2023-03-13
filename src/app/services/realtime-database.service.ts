import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {

  constructor( private db: AngularFireDatabase) { }

  getData(){
    return this.db.object('mediciones').valueChanges();
  }

leerDatos(ruta: string){

return this.db.object(ruta).valueChanges();
}
activar_foco(ruta: string, datos: any) {

this.db.database.ref(ruta).set(datos);

}

}
