import { Component, OnInit } from '@angular/core';
import {  NavController,AlertController } from '@ionic/angular';
import {  IonSlides, Platform, LoadingController, ToastController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-permision',
  templateUrl: './permision.page.html',
  styleUrls: ['./permision.page.scss'],
})
export class PermisionPage implements OnInit {
  location:any;
  id:any;
  data:any;
  articles:any;
  static_article:any=[];
  constructor(private route: ActivatedRoute, private menuCtrl: MenuController,public toastController: ToastController,public navCtrl:NavController,public routeCtrl: Router,private apiService: ApiService) {
    this.menuCtrl.enable(false);
    this.location=this.route.snapshot.paramMap.get("location");
    console.log(this.location)
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id)
   }

  ngOnInit() {
    this.apiService.getNews(this.location).subscribe((data)=>{
      this.data=data
      console.log(data);
      this.articles = data['articles'];
      this.articles.length=10;
      console.log(this.articles);
    })
  
  }
  next(){
    console.log(this.articles);
    var formData = new FormData();
 
    formData.append('cand_id', this.id);
    formData.append('articles',JSON.stringify(this.articles)  );
    
  // this.apiService.cand(formData).subscribe(data=>{
  //   console.log(data)
    
  //  this.static_article=data
  //  console.log( this.static_article)
  
  
  //  })
    this.routeCtrl.navigate(['/values',{"location":this.location,"id":this.id,"static_article":this.static_article}]);
    // this.routeCtrl.navigate(['/home',{"location":this.location,"id":this.id,"static_article":this.static_article}]);
  }
  exit(){
    navigator['app'].exitApp();
  }

}
