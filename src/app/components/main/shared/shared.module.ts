import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SublevelMenuComponent } from './sidebar/sublevel-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    OverlayModule,
    CdkMenuModule
  ],
  exports: [
    MenuComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
