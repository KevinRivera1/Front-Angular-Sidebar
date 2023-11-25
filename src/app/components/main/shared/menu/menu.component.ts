import { userItems } from './header-dummy-data';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchOverlay = false;

  userItems = userItems;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkCanShowSearchOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchOverlay(window.innerWidth);
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchOverlay(innerWidht: number): void {
    if (innerWidht > 845) {
      this.canShowSearchOverlay = true;
    } else {
      this.canShowSearchOverlay = false;
    }
  }
}
