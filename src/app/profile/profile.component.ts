import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any = 
    {
      name: "Andre",
      contactInfo: "ajsmoothdre@gmail.com",
      bio: "I'm awesome"
    }
  

  constructor(private profileService: ProfileserviceService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  editProfile() {
    this.profileService.editProfile();
  }

}
