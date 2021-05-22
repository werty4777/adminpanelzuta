import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {TapasComponent} from './components/tapas/tapas.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TapasModalComponent} from './components/tapas/tapas-modal/tapas-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {UrlServiceService} from './services/url-service.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginServiceService} from './services/login/login-service.service';


import {TapasServiceService} from './services/tapas/tapas-service.service';
import {TipoTapasService} from './services/tipoTapas/tipo-tapas.service';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import {CardComponent} from './shared/components/card/card.component';
import {CardListComponent} from './shared/components/card-list/card-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TapasComponent,
    TapasModalComponent,
    CardComponent,
    CardListComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule, FormsModule,
    MatSelectModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatTableModule, MatSortModule,
    HttpClientModule, NgxMatFileInputModule

  ],
  providers: [UrlServiceService, LoginServiceService, TapasServiceService, TipoTapasService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
