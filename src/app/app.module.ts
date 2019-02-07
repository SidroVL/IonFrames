import { SubirPage } from './../pages/subir/subir';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { PipesModule } from '../pipes/pipes.module';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

export const firebaseConfig = {
  apiKey: "AIzaSyA67D8_McG86fq3WQVfpCo_h2PVJBsR02Q",
    authDomain: "ionframes.firebaseapp.com",
    databaseURL: "https://ionframes.firebaseio.com",
    projectId: "ionframes",
    storageBucket: "ionframes.appspot.com",
    messagingSenderId: "831303651742"
};

@NgModule({
  declarations: [
    MyApp,
    SubirPage,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubirPage,
    HomePage,
    LoginPage, 
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    ImagePicker, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CargaArchivoProvider
  ]
})
export class AppModule {}
