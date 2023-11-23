import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { INavbarData, fadeInOut } from './helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0" class="sublevel-nav" [@submenu]="getSubMenuState()">
  <li *ngFor="let item of data.items" class="sublevel-nav-item">
    <a class="sublevel-nav-link" *ngIf="item.items && item.items.length > 0" (click)="handleClick(item)" [ngClass]="getActiveClass(item)">
      <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
        <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
          [ngClass]="!item.expanded ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-down'">
        </i>
    </a>
    <a class="sublevel-nav-link" *ngIf="!item.items || (item.items && item.items.length === 0)"
      [routerLink]="[item.routeLink]" routerLinkActive="active-sublevel" [routerLinkActiveOptions]="{exact: true}">
      <i class="sublevel-link-icon fa fa-circle"></i>
      <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
    </a>
    <div *ngIf="item.items && item.items.length > 0">
    <app-sublevel-menu [data]="item" [collapsed]="collapsed" [expanded]="item.expanded" [multiple]="multiple"></app-sublevel-menu>
    </div>
  </li>
</ul>
  `,
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden',
      })),
      state('visible', style({
        height: '*',
        overflow: 'visible',
      })),
      transition('visible <=> hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1 )')),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  };

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getSubMenuState(): string {
    return this.expanded ? 'visible' : 'hidden';
  }

  /*  handleClick(item: any): void {
     if (!this.multiple) {
       if (this.data.items && this.data.items.length > 0) {
         for (let modelItem of this.data.items) {
           if (item !== modelItem && modelItem.expanded) {
             modelItem.expanded = false;
           }
         }
       }
     }
     item.expanded = !item.expanded;
   } */

  handleClick(item: any): void {
    if (this.multiple) {
      item.expanded = !item.expanded;
    } else {
      if (this.data.items && this.data.items.length > 0) {
        this.data.items.forEach((modelItem) => {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        });
      }
      item.expanded = !item.expanded;
    }
  }

  /* getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routeLink) ? 'active-sublevel' : '';
  } */

  getActiveClass(item: INavbarData): string {
    const isActiveSublevel = item.expanded && this.router.url.includes(item.routeLink);
    return isActiveSublevel ? 'active-sublevel' : '';
  }
}
