import { Component, ɵConsole } from '@angular/core';
import { ApiService } from '../api.service';
import { ViewChild } from '@angular/core';
import {IonSlide}from '@ionic/angular'
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {  NavController,ToastController } from '@ionic/angular';
import { AlertController, IonSlides, Platform, LoadingController ,MenuController} from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-fullinfo',
  templateUrl: './fullinfo.page.html',
  styleUrls: ['./fullinfo.page.scss'],
})
export class FullinfoPage   {
  share:any=0;
 notshare:any=0;
  articles;
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
  
 arr_id:any;
 news:any;
 not_share:any;
 articel:any=[];
 toshare:any;
 id:any;
 sharee:any;
 arr_id2:any;
 arti:any;
 indexslide2:any;
 indexslide3:any;
 static_article:any=[];
 arr_id3:any;
 arr_id4:any;
  @ViewChild('slides',{static:false}) slides: IonSlides;
  


  constructor(private route: ActivatedRoute, private menuCtrl: MenuController,public toastController: ToastController,public navCtrl:NavController,private socialSharing: SocialSharing,private apiService: ApiService,public routeCtrl: Router,private sharingService: SharingService,) {
    this.menuCtrl.enable(false);
    this.location=this.route.snapshot.paramMap.get("location");
    this.id=this.route.snapshot.paramMap.get("id");
    // this.arti=this.route.snapshot.paramMap.get("arti");
    
    
    console.log(this.location)
  }
  
//   slideChangedd(){
//     var mySwiper = document.querySelector('ion-slides');
//     mySwiper.getActiveIndex().then(index => {
//       this.indexslide3=index;
//       console.log(index);
//       console.log( this.indexslide3);
  
//       var myySwiper = document.querySelector('ion-slides');
//       for (let c = 0; c < this.static_article.length; c++) {
//         if (c == this.indexslide3) {
//           console.log(this.static_article[c])
//           this.arr_id2=this.static_article[c].title

//           console.log(this.arr_id2)
         
//         }
     
//       }
// //       var formData = new FormData();
 
// //   formData.append('cand_id', this.id);
// //   formData.append('not_share', this.not_share);
// //   formData.append('arr_id',this.arr_id2)
// // this.apiService.send(formData).subscribe(data=>{
// //   console.log(data)



// //  })
     
     
     
//    })
  
    
//     }
  
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
       
    this.apiService.cand2(formData).subscribe(data=>{
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


// slideChange(index,article){
//   this.not_share=1
  
//   console.log(this.id)
 
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

 
  

  
//   this.notshare++
//   console.log(this.notshare)
//   console.log('work')
//   console.log(article)
//   this.end(this.slideseconds,this.seconds)
//  this.time=this.seconds - this.slideseconds
  
  
//   console.log(this.time + " seconds");
//   console.log("next")
//   // this.getindex()
//   this.presentToastright();
 
// }


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
  this.routeCtrl.navigate(['/stat2',{"share":this.sharee,"notshare":this.notshare,"location":this.location,"id":this.id,"arti":this.static_article }]);
}

load(){
  this.end(this.slideseconds,this.seconds)
  console.log(this.seconds)
}
next(){
  this.routeCtrl.navigate(['/statictisone',{share:this.share,notshare:this.notshare}]);
}
// slidepre(i,index){

 
  
//   this.sharee++
//   console.log(this.sharee)
//   var mySwiper2 = document.querySelector('ion-slides');
//   mySwiper2.getActiveIndex().then(index => {
//     this.indexslide2=index+2;
    
 
   


//     mySwiper2.slideTo(this.indexslide2)
//  })
 
//  var myySwiper = document.querySelector('ion-slides');
//  myySwiper.getActiveIndex().then(index2 => {
//   console.log(index2)
//   this.arr_id4=index2

 
// })
//  .then(dataa=>{

//   console.log(this.arr_id2)
//   var formData = new FormData();
 
//   formData.append('cand_id', this.id);
//   formData.append('toshare', this.not_share);
//   formData.append('arr_id',this.arr_id4)
// this.apiService.send(formData).subscribe(data=>{
//   console.log(data)



//  })
//  })
// console.log("left")
// this.end(this.slideseconds,this.seconds)
//  this.time=this.seconds - this.slideseconds

 


//  this.presentToastleft();


// }


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
  this.not_share=0;
  var mySwiper2 = document.querySelector('ion-slides');
  mySwiper2.getActiveIndex().then(index => {
    this.indexslide2=index;
    
 console.log(index)
   


    mySwiper2.slideTo(this.indexslide2+1)
 })
  console.log("left")
this.end(this.slideseconds,this.seconds)
 this.time=this.seconds - this.slideseconds

 


 
  
  var formData = new FormData();
  this.arr_id3=item.arr_id
  formData.append('time_on_page',this.time)
  formData.append('cand_id', this.id);
  formData.append('toshare', this.not_share);
  formData.append('arr_id',this.arr_id3)
this.apiService.send2(formData).subscribe(data=>{
  console.log(data)



 })
 this.presentToastleft();
}
sharenext(item){
  this.share=1;
  var mySwiper2 = document.querySelector('ion-slides');
  mySwiper2.getActiveIndex().then(index => {
    this.indexslide2=index;
    
 console.log(index)
   


    mySwiper2.slideTo(this.indexslide2+1)
 })
  var formData = new FormData();
  this.arr_id2=item.arr_id
  formData.append('cand_id', this.id);
  formData.append('not_share', this.share);
  formData.append('arr_id',this.arr_id2)
  formData.append('time_on_page',this.time)
this.apiService.send2(formData).subscribe(data=>{
  console.log(data)



 })
 this.presentToastright();
}
}
