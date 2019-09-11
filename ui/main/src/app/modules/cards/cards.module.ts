/* Copyright (c) 2018, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./components/card/card.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {DetailsComponent} from "./components/details/details.component";
import {DetailComponent} from "./components/detail/detail.component";
import {TranslateModule} from "@ngx-translate/core";
import {ThirdsService} from "../../services/thirds.service";
import {HandlebarsService} from "./services/handlebars.service";
import {UtilitiesModule} from "../utilities/utilities.module";
import {ActionComponent} from './components/action/action.component';
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmModalComponent} from "./components/action/confirm-modal/confirm-modal.component";

@NgModule({
  declarations: [CardComponent
      , CardDetailsComponent
      , DetailsComponent
      , DetailComponent
      , ActionComponent
      , ConfirmModalComponent],
  imports: [
    CommonModule,
      TranslateModule,
      UtilitiesModule,
      NgbModule
  ],
    exports: [CardComponent
        , CardDetailsComponent
        , DetailsComponent
        , DetailComponent
        , ConfirmModalComponent
    ],
    providers: [HandlebarsService],
    entryComponents: [ConfirmModalComponent]
})
export class CardsModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: CardsModule,
            providers: [ThirdsService]
        }
    }
}
