import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  url:string = "";

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getData().subscribe(data => {
      this.miPortfolio = data;
      this.url = data.bannerBackground;
    });
  }

  showMenuButton(){
    const menuButton: HTMLElement | null = document.getElementById('mobile-menu');
    if (menuButton == null)
        return;
    menuButton.style.display = 'block';
  }
  hideMenu(){
    const mobileMenu: HTMLElement | null = document.getElementById('nav');
    if (mobileMenu == null)
      return;
      
    mobileMenu.style.maxHeight = '0'; //esto lo rompe cuando la pantalla es mas de 768px de ancha
    if (screen.availWidth < 768){
    }
    console.log(screen.availWidth)
  }

  hideMenuButton(): void{
    const menuButton: HTMLElement | null = document.getElementById('mobile-menu');
    if (menuButton == null)
        return;
    menuButton.style.display = 'none';
  }
  showMenu(){
    const mobileMenu: HTMLElement | null = document.getElementById('nav');
    if (mobileMenu == null)
      return;
    mobileMenu.style.maxHeight = '80vh';
  }
}