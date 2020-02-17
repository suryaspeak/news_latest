import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ViewChild } from '@angular/core';
import {IonSlide}from '@ionic/angular'
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {  NavController,AlertController } from '@ionic/angular';
import {  IonSlides, Platform, LoadingController, ToastController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { SharingService } from '../sharing.service';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.page.html',
  styleUrls: ['./stat.page.scss'],
})
export class StatPage implements OnInit {

  share:any;
  notshare:any;
  location:any;
    constructor(public navCtrl:NavController,public alertController:AlertController,private route: ActivatedRoute,public routeCtrl:Router) { 
      this.share=this.route.snapshot.paramMap.get("share");
      this.notshare=this.route.snapshot.paramMap.get("notshare");
      this.location=this.route.snapshot.paramMap.get("location");
    }

  ngOnInit() {
  }
  Exit(){
    navigator['app'].exitApp();
  }
  
}
