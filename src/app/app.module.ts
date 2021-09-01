import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { ProductComponent } from './Pages/product/product.component';
import {appRoutes} from './routes';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FAQComponent } from './Pages/faq/faq.component';
import { ProductCardComponent } from './Components/product-card/product-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    FAQComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
