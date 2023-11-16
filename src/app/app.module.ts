// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Third-party imports
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageService } from 'primeng/api';
import { ButtonModule } from "primeng/button";

// Your application imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewPlanetComponent } from './new-planet/new-planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { DataService } from './data.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from "primeng/toolbar";
import { CardModule } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from "primeng/password";
import { RippleModule } from "primeng/ripple";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeTableModule } from "primeng/treetable";
import { KeyFilterModule } from "primeng/keyfilter";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NewPlanetComponent,
    PlanetsComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    InputSwitchModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    ToolbarModule,
    MessagesModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
    BrowserAnimationsModule,
    TreeTableModule,
    KeyFilterModule,
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
