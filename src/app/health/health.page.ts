import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  articles;
  content:any;
  title:any;
  urlToImage:any;
  info:any;
  data:any;
  constructor(private apiService: ApiService,public routeCtrl: Router) { }
  ionViewDidEnter(){
    this.info="health"
    this.apiService.getSportsNews(this.info).subscribe((data)=>{
      console.log(data);
      this.data=data
      this.articles = data['articles'];
    });
  }
  ngOnInit() {
  }
  goto(article){
    console.log(article)
    this.content=article.content
    this.title=article.title
    this.urlToImage=article.urlToImage
    console.log(this.urlToImage)
    this.routeCtrl.navigate(['/list/',{content:this.content,title:this.title,urlToImage:this.urlToImage}]);
    }

}
