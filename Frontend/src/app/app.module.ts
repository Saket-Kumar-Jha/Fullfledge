import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatcompModule } from './matcomp/matcomp.module';
import { RoutemodModule } from './routemod/routemod.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path:'', redirectTo:'card', pathMatch: 'full' },
  { path: 'card', component: CardComponent},
  { path:'addtocart', component: AddtocartComponent},
  { path:'details/:id',component: DetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    AddtocartComponent,
    DetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatcompModule,
    RoutemodModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
