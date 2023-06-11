import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService,
    private storage: Storage) {
      this.storage.get('selected-app-theme').then((value) =>{
        console.log(value)
        this.themeService.setAppTheme(value);
      })
    }

}
