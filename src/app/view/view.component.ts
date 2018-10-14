import { Component, OnInit } from '@angular/core';
import { RegistrationList } from '../model/registration.list';
import { RegistrationModel } from '../model/registration.model';
import { ViewService } from './view.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  registrationModels: RegistrationModel[] = [];

  constructor(private viewService: ViewService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('ngOnInit()');

    this.viewService.readAll<RegistrationList>().subscribe(
      (registrations) => { 
        //console.log('email=' + registrations.models[0].email); 
        this.registrationModels = registrations.models; 

        // convert base64 string to image resource path for all elements
        for(var i = 0; i < this.registrationModels.length; i++) {
          this.registrationModels[i].drivingLicensePath = this.domSanitizer.bypassSecurityTrustResourceUrl(
            this.registrationModels[i].drivingLicense
          );
        }
      },
      error => {  
        console.log(error)
      }
    );
  }

}
