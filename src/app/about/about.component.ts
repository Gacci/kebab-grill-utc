import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { LocationService } from '../services/location.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
    /**
     * 
     */
    @ViewChild('map_box', { static: true, read: ElementRef })
        map_box: ElementRef;

  
        
    public form: FormGroup = new FormGroup({
        name: new FormControl(null, [
            Validators.required ]),

        email: new FormControl(null, [ 
            Validators.email ]),

        phone_number: new FormControl(null, [ 
            Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/) ]),

        date_time: new FormControl(null, []),

        guest_count: new FormControl(null, [ 
            Validators.required ])
    });


    constructor(private geoservice: LocationService) { }

    ngOnInit(): void {

    }


    ngAfterViewInit(): void {
        this.geoservice.config(this.map_box.nativeElement, [ 
            32.750679004275874 ,-117.23809058250849
        ]);
    }

    submitClientInquire(e: Event): void {
        console.log(e);
    }
}
