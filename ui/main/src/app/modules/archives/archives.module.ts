/* Copyright (c) 2018, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArchivesRoutingModule} from './archives-routing.module';
import {ArchivesComponent} from "./archives.component";

@NgModule({
  imports: [
    CommonModule,
    ArchivesRoutingModule
  ],
  declarations: [ArchivesComponent]
})
export class ArchivesModule { }
