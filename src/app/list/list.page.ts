import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  content:any=[]
  title:any;
  urlToImage:any;
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.content=this.route.snapshot.paramMap.get("content");
    this.title=this.route.snapshot.paramMap.get("title");
    this.urlToImage=this.route.snapshot.paramMap.get("urlToImage");
    console.log(this.content)
    console.log(this.urlToImage)
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
