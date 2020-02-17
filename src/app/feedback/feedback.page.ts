import { Component, OnInit } from '@angular/core';
import {  NavController,AlertController } from '@ionic/angular';
import {  IonSlides, Platform, LoadingController, ToastController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
id:any;
fb:any;
mag:any;
api_value:any;
arr:any=[];
values_ans:any;
fake:any;

stat_value:any;
  constructor(private route: ActivatedRoute, private menuCtrl: MenuController,public toastController: ToastController,public navCtrl:NavController,public routeCtrl: Router,private apiService: ApiService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    var formData = new FormData();
   
    formData.append('cand_id', this.id);
    
    this.apiService.getfeed(formData).subscribe(data=>{
      console.log(data)
     this.fb=data

    // this.api_value=this.fb.values

    for(let i=0;i<this.fb.length;i++){
      this.api_value=this.fb[i].values
    }
    console.log(this.api_value)

    
     })
  }
  subhmit(){
   console.log(this.fake)
    for(let temp=0;temp<this.fb.length;temp++){
      console.log(this.fb[temp].id)
        this.arr.push({cand_id:this.fb[temp].cand_id,title:this.fb[temp].title,status:this.fb[temp].status,answer:this.fb[temp].answer,values_ans:this.fb[temp].values_ans,
          check:this.fb[temp].check

        })

    }
console.log(JSON.stringify(this.arr))
  var formData = new FormData();
  
  formData.append('news_feedback',JSON.stringify(this.arr));
  this.apiService.givefeed(formData).subscribe(data=>{
    console.log(data)
  
  
  
   })
  
   this.navCtrl.navigateRoot(['last']);
}

}
