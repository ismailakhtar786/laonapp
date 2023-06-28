import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanSearchComponent } from './loan-search/loan-search.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { VehicleLoanComponent } from './vehicle-loan/vehicle-loan.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'left-nav', component: LeftNavigationComponent },
  { path: 'loan-application', component: LoanApplicationComponent },
  { path: 'loan-search', component: LoanSearchComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  { path: 'vehicle-loan', component: VehicleLoanComponent },
];

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  declarations: [AppComponent, LoginComponent, LoanApplicationComponent, HeaderComponent, LeftNavigationComponent, HomeLoanComponent, VehicleLoanComponent],
  bootstrap: [AppComponent]
})

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     LoanApplicationComponent,
//     LoanSearchComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
