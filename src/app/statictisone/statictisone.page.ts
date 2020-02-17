import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PopoverController, AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-statictisone',
  templateUrl: './statictisone.page.html',
  styleUrls: ['./statictisone.page.scss'],
})
export class StatictisonePage implements OnInit {
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
    
    this.apiService.phase1(formData).subscribe(data=>{
      console.log(data)
    this.data=data
    this.share=this.data.phase_1_share
    this.notshare=this.data.phase_1_notshare
    
    
     })
  }
  nextfase(){
    this.navCtrl.navigateRoot(['fullinfo',{"location":this.location,"id":this.id,"arti":this.arti }]);
}
}
