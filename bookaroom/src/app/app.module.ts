import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'callback', component: CallbackComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TableComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
