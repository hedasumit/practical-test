import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './services/product.service';
import {AddDialogComponent} from './product/add/add.dialog.component';
import {EditDialogComponent} from './product/edit/edit.dialog.component';
import {DeleteDialogComponent} from './product/delete/delete.dialog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RemoveDialogComponent } from './trash/remove/remove.dialog.component';
import { RestoreDialogComponent } from './trash/restore/restore.dialog.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    TrashComponent,
    ProductDetailComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    FilterPipe,
    RemoveDialogComponent,
    RestoreDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageZoomModule 
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
