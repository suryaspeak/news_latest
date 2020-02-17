import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ViewChild } from '@angular/core';
import {IonSlide}from '@ionic/angular'
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {  NavController,AlertController } from '@ionic/angular';
import {  IonSlides, Platform, LoadingController, ToastController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { SharingService } from '../sharing.service';
@Component({
  selector: 'app-values',
  templateUrl: './values.page.html',
  styleUrls: ['./values.page.scss'],
})
export class ValuesPage implements OnInit {
  location:any;
  id:any;
  Values:any;
  constructor(private route: ActivatedRoute, private menuCtrl: MenuController,public toastController: ToastController,public navCtrl:NavController,private socialSharing: SocialSharing,private apiService: ApiService,public routeCtrl: Router,private sharingService: SharingService,) {
    this.menuCtrl.enable(false);
    // this.static_article=this.route.snapshot.paramMap.get("static_article");
    // console.log(this.static_article)
    this.location=this.route.snapshot.paramMap.get("location");
    console.log(this.location)
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id)
   }

  ngOnInit() {
  }
  submit(){
    console.log(this.Values)
    var formData = new FormData();
   
    formData.append('cand_id', this.id);
    formData.append('values',this.Values);
       
    this.apiService.givevalues(formData).subscribe(data=>{
      console.log(data)
  
    
      this.routeCtrl.navigate(['/home',{"location":this.location,"id":this.id}]);
     })
    
  }

}
