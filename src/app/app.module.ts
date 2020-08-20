import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {Produit} from './shared/produit';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { ProduitService } from './produit/produit.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { XhrInterceptor } from './xhr.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass:XhrInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
