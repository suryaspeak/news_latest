import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor(private socialSharing: SocialSharing) { }
  share(){
    this.socialSharing.share("Hey, want to share this news.", null );
   
  }
}
