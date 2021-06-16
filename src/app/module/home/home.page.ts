import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public title:string ="Accueil";

  constructor(private router:Router) {}

  navigateToHome(){
    this.router.navigate(['/'])
  }

  navigateToSerie(){
    this.router.navigate(['/serie'])
  }
  navigateToMovie(){
    this.router.navigate(['/movie'])

  }

}
