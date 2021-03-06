/* Copyright (c) 2018-2021, RTE (http://www.rte-france.com)
 * Copyright (c) 2020, RTEi (http://www.rte-international.com)
 *  See AUTHORS.txt
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * SPDX-License-Identifier: MPL-2.0
 * This file is part of the OperatorFabric project.
 */


import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StateModule} from '@ofStore/state.module';
import {ServicesModule} from '@ofServices/services.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './modules/login/login.component';
import {TranslateModule} from '@ngx-translate/core';
import {OAuthModule} from 'angular-oauth2-oidc';
import {LoggingModule} from './modules/logging/logging.module';
import {MonitoringModule} from './modules/monitoring/monitoring.module';
import {AdminModule} from './modules/admin/admin.module';
import {CalendarModule} from './modules/calendar/calendar.module';
import {AppErrorHandler} from './common/error/app-error-handler';
import {ArchivesModule} from './modules/archives/archives.module';
import {NavbarModule} from './modules/navbar/navbar.module';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeIconsModule} from './modules/utilities/fontawesome-icons.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    StateModule.forRoot(),
    ServicesModule.forRoot(),
    NgbModule,
    TranslateModule.forRoot(),
    FontAwesomeIconsModule,
    ArchivesModule,
    LoggingModule,
    MonitoringModule,
    NgbModalModule,
    AppRoutingModule,
    AdminModule,
    CalendarModule,
    NavbarModule
  ],
  declarations: [AppComponent,
    LoginComponent
  ],


  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
