import { Component } from '@angular/core';
import { TokenService } from '../../../../../auth/services/token.service';

@Component({
  selector: 'app-kabupaten-list',
  templateUrl: './kabupaten-list.component.html',
  styleUrl: './kabupaten-list.component.scss'
})
export class KabupatenListComponent {
  constructor(private tokenServie: TokenService) {
    const userData = this.tokenServie.getUserData();

    console.log(userData.fullname);
  }
}
