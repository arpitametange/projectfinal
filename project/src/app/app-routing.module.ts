import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [{ path:'', redirectTo: 'main', pathMatch: 'full'}, // localhost:4200
  {path: 'main', component: MainComponent}, 
  { path: 'about-us', component: AboutUsComponent}, // localhost:4200/about-us
  { path: 'contact-us', component: ContactUsComponent},
{path:'service',component:ServicesComponent},
{path:'news-letter',component:ServiceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
