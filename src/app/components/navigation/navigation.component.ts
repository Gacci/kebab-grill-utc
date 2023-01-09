import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { environment } from 'projects/KebabGrill/src/environments/environment';

@Component({
    selector: 'site-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    // @HostListener('document:scroll', [ '$event' ])
    //     public onDocumentScroll(e: Event) {
    //         console.log(e);
    //     }

    public env: {[key: string]: any} = environment;

    public mobileMenuDropdown: boolean;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.mobileMenuDropdown = false;
            }
        });
    }

    toggleMobileMenuVisibility(event: Event) {
        this.mobileMenuDropdown = !this.mobileMenuDropdown;
    }
}
