import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta) { }

  title = 'TECNOLOGIA WEB';

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Explora nuestros servicios tecnológicos en nuestro eCommerce. Ofrecemos soluciones innovadoras en desarrollo web, diseño UX/UI, análisis de datos y más. Optimiza tu presencia online con nuestros servicios especializados.' });
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isSideNavCollapsed = false;
  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
