import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserSearchComponent } from '../components/user-search/user-search.component';
import { UserFavoritesComponent } from '../components/user-favorites/user-favorites.component';
import { UserUploadComponent } from 'src/components/user-upload/user-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSearchComponent,
    UserFavoritesComponent,
    UserUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
