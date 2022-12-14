import { Component } from '@angular/core';

import { AuthenticationService } from '../app/services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Anggota', url: '/anggota', icon: 'person' },
    { title: 'Buku', url: '/buku', icon: 'book' },
    { title: 'Peminjaman', url: '/peminjaman', icon: 'bag' },
    // { title: 'Logout', url: '/logout', icon: 'paper-plane' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router : Router,
    public menu: MenuController) {}

  logout() {
    this.menu.close();
    this.alertController.create({
      header: 'Perhatian',
      subHeader: 'Yakin Logout aplikasi ?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}
