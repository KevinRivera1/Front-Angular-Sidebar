import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
