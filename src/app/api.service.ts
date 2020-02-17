import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '4d0073d134af459490a6a67f0df7a465';
  main='https://newsapi.org/v2/top-headlines?'
  ourl='https://auto-clinic.in/news_api/api/'
  // turl:any="http://www.gainwellsiksa.com/RESTService/SiksaRestService.svc/";
  constructor(private httpClient: HttpClient,private http: HttpClient) { }
  getNews(location){
    var loc='country='+location+'&'
    var url = this.main + 
    'language=en&'+

    loc +
    
    'sortBy=popularity&' +
    'apiKey=4d0073d134af459490a6a67f0df7a465';
   
var req = new Request(url);
return this.httpClient.get(url) // return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  
  getSportsNews(info){
//     var url = 'https://newsapi.org/v2/top-headlines?' +
//     'country=in&' +
//     'from=2019-10-10&' +
//     'sortBy=popularity&' +
//     'category=sports'+
//     'apiKey=5622ce7d468a432f939719a76fa9bc4d';
   
// var req = new Request(url);
// return this.httpClient.get(url) 
var category
if(info=="entertainment"){
  category="entertainment"
}
else if(info=="sports"){
  category="sports"
}
else if(info=="health"){
  category="health"
}
else if(info=="science"){
  category="science"
}
else if(info=="technology"){
  category="technology"
}
else if(info=="business"){
  category="business"
}

return this.httpClient.get(`https://newsapi.org/v2/top-headlines?language=en&country=br&category=${category}&apiKey=${this.API_KEY}`);
  }
  register(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'insert',data)

  }
  send(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'news_cand_recrd',data)

  }
  send2(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'news_cand_recrd_2',data)

  }
  cand(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'news_cand',data)

  }
  cand2(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'news_cand_2',data)

  }
  getfeed(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'news_feedback',data)

  }
  givefeed(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'post_feedback',data)

  }
  givevalues(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'values',data)

  }
  phase1(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'phase_values_1',data)

  }
  phase2(data) {
  
    // return new Promise((resolve, reject) => {
    //   this.httpClient.post(this.ourl+'insert',formdata)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
    // return this.http.post(url);
    return this.http.post(this.ourl+'phase_values_2',data)

  }
 
  
  
}
