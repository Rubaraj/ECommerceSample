import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const THEME_KEY = 'selected-app-theme'
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  sharedDarkValue: any;
  constructor(private storage: Storage) {
    this.storage.create();
   }

  setAppTheme(dark){
    this.sharedDarkValue = dark;
    if(dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.storage.set(THEME_KEY,dark);
  }
}
