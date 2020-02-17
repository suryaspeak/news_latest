import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ViewChild } from '@angular/core';
import {IonSlide}from '@ionic/angular'
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {  NavController,AlertController } from '@ionic/angular';
import {  IonSlides, Platform, LoadingController, ToastController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { SharingService } from '../sharing.service';
// import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 share:any=0;
 notshare:any;
  articles:any=[];
  content:any;
  title:any;
  urlToImage:any;
  data:any;
  startTime:any;
  endTime:any;
  show:boolean=false;
  seconds:any;
  slideseconds:any;
  time:any;
  indexslide:any;
  indexslide2:any;
  slideOpts = {
   
    initialSlide: 0,
    loop: false,
    direction: 'horizontal',
    pager: true,
    speed: 800,
    // allowSlidePrev: false ,
    effect:'cube',
    allowTouchMove: false,
    
  };
 location:any;
  id:any;
  not_share:any=0;
  toshare:any=0;
  news:any=[];
  arr_id:any;
  articel:any;
  sharee:any;
  arr_id2:any;
  static_article:any=[];
  indexslide3:any;
  arr_id3:any;
  lock:any;
  cand_id:any;
  @ViewChild('slides',{static:false}) slides: IonSlides;
  


  constructor(private route: ActivatedRoute, private menuCtrl: MenuController,public toastController: ToastController,public navCtrl:NavController,private socialSharing: SocialSharing,private apiService: ApiService,public routeCtrl: Router,private sharingService: SharingService,) {
    this.menuCtrl.enable(false);
    // this.static_article=this.route.snapshot.paramMap.get("static_article");
    // console.log(this.static_article)
    this.location=this.route.snapshot.paramMap.get("location");
    console.log(this.location)
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  
  //  this.slides.lockSwipes
  // var mySwiper = document.querySelector('ion-slides');
  // mySwiper.lockSwipeToNext(true)
  }
  slideChangedd(){
    var mySwiper = document.querySelector('ion-slides');
    mySwiper.getActiveIndex().then(index => {
      this.indexslide3=index;
      console.log(index);
      console.log( this.indexslide3);
  
      // var myySwiper = document.querySelector('ion-slides');
      // for (let c = 0; c < this.static_article.length; c++) {
      //   if (c == this.indexslide3) {
      //     console.log(this.static_article[c])
      //     this.arr_id2=this.static_article[c].arr_id
      //     console.log(this.arr_id2)
         
      //   }
     
      // }
//       var formData = new FormData();
 
//   formData.append('cand_id', this.id);
//   formData.append('not_share', this.not_share);
//   formData.append('arr_id',this.arr_id2)
// this.apiService.send(formData).subscribe(data=>{
//   console.log(data)



//  })
     
     
     
   })
  
    
    }
  
  ngOnInit() { 
    
      this.apiService.getNews(this.location).subscribe((data)=>{
    
    console.log(data);
    this.articles = data['articles'];
    this.articles.length=10;
    console.log(this.articles);
    this.articel=JSON.stringify(this.articles)
    console.log(this.articel)
    var formData = new FormData();
   
    formData.append('cand_id', this.id);
    formData.append('articles',this.articel);
       
    this.apiService.cand(formData).subscribe(data=>{
      console.log(data)
      this.data=data
     this.static_article=data
     console.log( this.static_article)
    
    
     })
  })
 
   
  }

  ionViewDidEnter(){
    
    
   
    
    this.startTime = new Date();
 
    
  }
  lockSwipes(bool) {
    this.slides.lockSwipes(bool);
  }


slideChange(index,article){
  this.not_share=1
  
  
 
//   var mySwiper = document.querySelector('ion-slides');
//   mySwiper.getActiveIndex().then(index => {
//     this.indexslide=index;
//     console.log(index);
//     console.log(this.indexslide)
//     this.arr_id=this.indexslide
   
//  }).then(dataa=>{
 
//   console.log(this.news)
 
  
//   console.log(this.arr_id2) 
//   var formData = new FormData();
 
//   formData.append('cand_id', this.id);
//   formData.append('not_share', this.not_share);
//   formData.append('arr_id',this.arr_id2)
// this.apiService.send(formData).subscribe(data=>{
//   console.log(data)



//  })
//  })

 
  

  
  
  console.log(this.notshare)
  console.log('work')
  console.log(article)
  this.end(this.slideseconds,this.seconds)
 this.time=this.seconds - this.slideseconds
  
  
  console.log(this.time + " seconds");
  console.log("next")
  // this.getindex()
  // this.presentToastright();
 
}


 end(slideseconds,seconds) {
  this.endTime = new Date();
    var timeDiff = this.endTime - this.startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
  
    // get seconds 
   
     this.seconds = Math.round(timeDiff);
   this.slideseconds= seconds
    
}
// double(){
//   console.log("double")
//   this.socialSharing.share("Hey, want to share this news.", null,null );
// }
slideend(){
  
  console.log('end')
//   this.show=true
//   console.log(this.show)
//   var mySwiper = document.querySelector('ion-slides');
 
// this.articel=JSON.stringify(this.articles)
//   var formData = new FormData();
 
//   formData.append('cand_id', this.id);
//   formData.append('articles',this.articel);
  
// this.apiService.cand(formData).subscribe(data=>{
//   console.log(data)
//  this.static_article=data
//  console.log( this.static_article)


//  })
  this.routeCtrl.navigate(['/statictisone',{"share":this.sharee,"notshare":this.notshare,"location":this.location,"id":this.id,"arti":this.static_article }]);
}

load(){
  this.end(this.slideseconds,this.seconds)
  console.log(this.seconds)
}
next(){
  this.routeCtrl.navigate(['/statictisone',{share:this.share,notshare:this.notshare}]);
}
slidepre(i,index){

//   var mySwiper2 = document.querySelector('ion-slides');
//   mySwiper2.getActiveIndex().then(index => {
//     this.indexslide2=index;
    
//  console.log(index)
   


//     mySwiper2.slideTo(this.indexslide2)
//  })
  
  // this.sharee++
  console.log(this.sharee)
//   var mySwiper2 = document.querySelector('ion-slides');
//   mySwiper2.getActiveIndex().then(index => {
//     this.indexslide2=index+2;
    
 
//     var myySwiper = document.querySelector('ion-slides');


//     mySwiper2.slideTo(this.indexslide2)
//  })
//  .then(dataa=>{

//   console.log(this.arr_id2)
//   var formData = new FormData();
 
//   formData.append('cand_id', this.id);
//   formData.append('toshare', this.not_share);
//   formData.append('arr_id',this.arr_id2)
// this.apiService.send(formData).subscribe(data=>{
//   console.log(data)



//  })
//  })
// console.log("left")
// this.end(this.slideseconds,this.seconds)
//  this.time=this.seconds - this.slideseconds

 


//  this.presentToastleft();


}


async presentToastleft() {
  const toast = await this.toastController.create({
    message:"Share On Social Media In : "+this.time+ " seconds",
    duration: 300,
    position:"bottom"
  });
  toast.present();
}
async presentToastright() {
  const toast = await this.toastController.create({
    message:"Not Share On Social Media IN  : "+this.time+ " seconds",
    duration: 300,
    position:"bottom"
  });
  toast.present();
}
tab(){
  console.log("double tab")
  var mySwiper2 = document.querySelector('ion-slides');
  // mySwiper2.getActiveIndex().then(index => {
  //   this.indexslide2=index;
    
  //   this.toshare=1
  


  //   mySwiper2.slideTo(this.indexslide2+1)
    // for (let c = 0; c < this.static_article.length; c++) {
    //   if (c == this.indexslide2) {
    //     // console.log(this.static_article[c])
    //     this.arr_id2=this.static_article[c].arr_id
    //     console.log(this.arr_id2)
       
    //   }
   
    // }
    console.log(this.arr_id2)
//   var formData = new FormData();
 
//   formData.append('cand_id', this.id);
//   formData.append('toshare', this.toshare);
//   formData.append('arr_id',this.arr_id2)
// this.apiService.send(formData).subscribe(data=>{
//   console.log(data)



//  })
//  })

}
// getindex(){
//   var mySwiper2 = document.querySelector('ion-slides');
//   mySwiper2.getActiveIndex().then(index => {
//     this.indexslide2=index;
//     console.log(index);
//     console.log(this.indexslide2)
//     this. arr_id2=this.indexslide2
  
//  })
//  console.log("index")
// }
shareornot(){}
idget(item){
  console.log(item)
  // this.lock.lockSwipes(false)
  this.notshare=this.notshare++;
  console.log(this.not_share)
  var mySwiper2 = document.querySelector('ion-slides');
  mySwiper2.getActiveIndex().then(index => {
    this.indexslide2=index;
    
 console.log(index)
   


    mySwiper2.slideTo(this.indexslide2+1)
 })
  console.log("left")
this.end(this.slideseconds,this.seconds)
 this.time=this.seconds - this.slideseconds

 


 this.presentToastleft();
  this.not_share=0;
  var formData = new FormData();
  this.arr_id3=item.arr_id
  formData.append('time_on_page',this.time)
  formData.append('cand_id', this.id);
  formData.append('toshare', this.not_share);
  formData.append('arr_id',this.arr_id3)
this.apiService.send(formData).subscribe(data=>{
  console.log(data)



 })

}
sharenext(item){
  console.log(item)
  // this.lock.lockSwipes(false)
  this.presentToastright();
  this.sharee=1
  var mySwiper2 = document.querySelector('ion-slides');
  mySwiper2.getActiveIndex().then(index => {
    this.indexslide2=index;
    
 console.log(index)
   


    mySwiper2.slideTo(this.indexslide2+1)
 })
  var formData = new FormData();
  this.arr_id2=item.arr_id
  formData.append('cand_id', this.id);
  formData.append('not_share', this.sharee);
  formData.append('arr_id',this.arr_id2)
  formData.append('time_on_page',this.time)
 
this.apiService.send(formData).subscribe(data=>{
  console.log(data)



 })
}
fab(item){
  console.log(item)
}
}
