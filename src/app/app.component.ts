import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {  NavController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Business',
      url: '/business',
      icon: 'briefcase'
    },
  
    {
      title: 'Entertainment',
      url: '/entertainment',
      icon: 'images'
    },
    {
      title: 'Health',
      url: '/health',
      icon: 'medkit'
    },
    {
      title: 'Sports',
      url: '/sports',
      icon: 'american-football'
    },
    {
      title: 'Science',
      url: '/science',
      icon: 'flask'
    },
    {
      title: 'Technology',
      url: '/technology',
      icon: 'snow'
    },
   
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl:NavController,
    public alertcontroller: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
   
    this.platform.ready().then(() => {
      this.navCtrl.navigateRoot(['register']);
       
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
}
async log() {

  const alert = await this.alertcontroller.create({
    header: "Log Out Now?",
    cssClass: "myAlert",
    message: "DO YOU REALLY WANT TO Logut?",
    buttons: [{
      text: 'NO',
      role: 'cancel',
      cssClass: 'myAlert',
      handler: () => {  }
    },
    {
      text: 'YES',
      handler: () => {
          localStorage.clear();
        this.navCtrl.navigateRoot(['register']);
     
      }


    }]

  });

  await alert.present();
}
}
