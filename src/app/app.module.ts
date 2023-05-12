import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsearchComponent } from './shared/formsearch/formsearch.component';
import { SeparadorPipe } from './pipes/separador.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    DetailClientComponent,
    HeaderComponent,
    FormsearchComponent,
    SeparadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
