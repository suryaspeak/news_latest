import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PopoverController, AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-stat2',
  templateUrl: './stat2.page.html',
  styleUrls: ['./stat2.page.scss'],
})
export class Stat2Page implements OnInit {

  share:any;
  notshare:any;
  location:any;
  id:any;
  arti:any;
  data:any;
    constructor(public navCtrl:NavController,public alertController:AlertController,public popoverCtrl:PopoverController,private route: ActivatedRoute,public routeCtrl:Router,private apiService: ApiService) { 
     
      this.location=this.route.snapshot.paramMap.get("location");
      this.id=this.route.snapshot.paramMap.get("id");
      this.arti=this.route.snapshot.paramMap.get("arti");
    }
  
  
  
    
    ngOnInit() {
      this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    var formData = new FormData();
   
    formData.append('cand_id', this.id);
    
    this.apiService.phase2(formData).subscribe(data=>{
      console.log(data)
    this.data=data
    this.share=this.data.phase_2_share
    this.notshare=this.data.phase_2_notshare
    
    
     })
    }
    nextfase(){
      this.navCtrl.navigateRoot(['feedback',{"location":this.location,"id":this.id,"arti":this.arti }]);
  }

}
