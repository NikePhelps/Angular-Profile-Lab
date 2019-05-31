import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  saveProfile(updateProfile: any) {
    this.profileService.updateProfile(updateProfile);

  }

}
