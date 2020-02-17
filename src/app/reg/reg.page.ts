import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  LOCATION:any;
  age:any;
  Gender:any;
  Qualifciaton:any;
  info:any=[];
  Profession:any;
  username:any;
  location:any;
  constructor(public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) { 
    this.menuCtrl.enable(false);
  }


  ngOnInit() {
  }
  go(){
    // alert("M")
  if (this.username && this.location && this.Qualifciaton && this.age && this.Gender == undefined){
    alert("Mandatory fields are required to be filled")
  }
  else{
    console.log(this.location,this.location,this.Qualifciaton,) 
    var formData = new FormData();
   
    formData.append('username', this.username);
    formData.append('country', this.location);
    formData.append('profession', this.Qualifciaton);
    formData.append('age', this.age);
    formData.append('gender', this.Gender);
    
   
   this.apiService.register(formData).subscribe(data=>{
     console.log(data['success'])
   if (data['success'] == true){
   this.sucess() 
   this.info=data['cand_id']
   this.navCtrl.navigateRoot(['permision',{"location":this.location,"id":this.info}]);
   
   }
   else{
     alert("oops! some thing went wrong try again")
   }
    })
  }
   
   
  
    
  
  
  }
    async sucess() {
    const toast = await this.toastController.create({
      message:"Sucess",
      duration: 300,
      position:"bottom"
    });
    toast.present();
  }
}
