import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private router: Router
    ) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['dashboard'] }
                ]
            },
            {
                items: [
                    {
                        label: 'Master',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Kabupaten',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['master/kabupaten']
                            },
                            {
                                label: 'Kecamatan',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['master/kecamatan']
                            },
                            {
                                label: 'Kelurahan',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['master/kelurahan']
                            },
                            {
                                label: 'Partai',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['master/partai']
                            }
                        ]
                    },
                    {
                        label: 'Tim',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Panitia',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['tim/panitia']
                            },
                        ]
                    },
                    {
                        label: 'Absen',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['absen']
                    },
                    {
                        label: 'Calon',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['calon']
                    },
                    {
                        label: 'TPS',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['tps']
                    },
                    {
                        label: 'Suara',
                        icon: 'pi pi-fw pi-volume-up',
                        routerLink: ['suara']
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-fw pi-sign-out',
                        routerLink: ['login'],
                        command: () => this.logout()
                    },
                ]
            },
        ];
    }

    logout() {
        location.reload();
        this.router.navigate(['auth/login']);
    }
}
