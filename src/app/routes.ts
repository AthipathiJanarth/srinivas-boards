import { Routes } from "@angular/router";
import { AboutComponent } from "./Pages/about/about.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { FAQComponent } from "./Pages/faq/faq.component";
import { HomeComponent } from "./Pages/home/home.component";
import { ProductComponent } from "./Pages/product/product.component";

export const appRoutes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'Product',component:ProductComponent},
    {path:'About',component:AboutComponent},
    {path:'Contact',component:ContactComponent},
    {path:'FAQ',component:FAQComponent},
    {path:'**', redirectTo: '/Home'}
    
  ]