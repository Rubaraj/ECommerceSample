import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  darkValue: any;
  
  constructor(private themeService: ThemeService) {}

  get darkBoolean(){
    return this.themeService.sharedDarkValue;
  }

  ngOnInit(): void {
    this.darkValue = this.darkBoolean;
    console.log(this,this.darkValue)
  }

  setTheme(ev) {
    this.themeService.setAppTheme(ev.detail.checked);
  }
}