import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
userProfile: any = 
  {
    name: "Andre",
    contactInfo: "ajsmoothdre@gmail.com",
    bio: "I'm awesome"
  }



  constructor(private router: Router) { }


  getUserProfile(): any {
    return this.userProfile
  };

  setUserProfile(profileInfo): any {
    console.log(profileInfo);
    this.userProfile = [
      {
        name: profileInfo.name,
        contactInfo: profileInfo.contactInfo,
        bio: profileInfo.bio
      }
    ]
    return this.userProfile


  };

  editProfile(): void {
   this.router.navigate(['/edit-profile']); 
}

updateProfile(updateProfile: any): void {
  this.userProfile = {...updateProfile};
  this.router.navigate(['/profile']);
}

}
