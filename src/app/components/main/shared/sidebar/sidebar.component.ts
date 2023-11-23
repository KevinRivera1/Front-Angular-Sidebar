import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarData, fadeInOut } from './helper';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(2turn)', offset: 1 })
        ]))
      ]),
    ])
  ],
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed });
    }
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed });
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  /* shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  } */

  shrinkItems(item: INavbarData): void {
    if (this.multiple) {
      return;
    }

    this.navData.forEach((modelItem) => {
      if (item !== modelItem && modelItem.expanded) {
        modelItem.expanded = false;
      }
    });
  }
}
