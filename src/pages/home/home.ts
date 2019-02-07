import { AngularFireDatabase} from '@angular/fire/database';
import { SubirPage } from './../subir/subir';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable'
import { NgForOf } from '@angular/common';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts : Observable<any[]>;
  constructor(private modalCtrl:ModalController,
              private afDB:AngularFireDatabase) {      
  
    this.posts =this.afDB.list('ionframes').valueChanges();
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create(SubirPage);
    modal.present();
     
  }

}
