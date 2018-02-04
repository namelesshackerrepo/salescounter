import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCixVKShBv5Ye9iSVVcmgj4hdOceNWBGEo',
  authDomain: 'scoutsales-dc763.firebaseapp.com',
  databaseURL: 'https://scoutsales-dc763.firebaseio.com',
  projectId: 'scoutsales-dc763',
  storageBucket: 'scoutsales-dc763.appspot.com',
  messagingSenderId: '74807490605'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
