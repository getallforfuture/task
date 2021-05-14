import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from './shared/search.pipe';
import { UserBioComponent } from './user-bio/user-bio.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {UsersModule} from './modules/users/users.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    UserBioComponent,
  ],
    imports: [
        RouterModule.forRoot([]),
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}, {
    }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
      UsersModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
