import { Component, Input, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  url:string = "";

  constructor(private datos:DatosService, public authService: AutenticacionService) { }

  ngOnInit(): void {
    this.datos.getData('personas').subscribe(data => {//pasar "personas" como parámetro
      this.miPortfolio = data[0];
      this.url = this.miPortfolio.url_banner;
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
      
    mobileMenu.style.maxHeight = '0';
    if (screen.availWidth < 768){
    }
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

  logout(){
    this.authService.logOut();
  }
}