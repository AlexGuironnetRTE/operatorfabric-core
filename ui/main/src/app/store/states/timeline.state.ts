/* Copyright (c) 2018, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {LightCard} from '@ofModel/light-card.model';
import {LightCardAdapter} from "@ofStates/feed.state";

export interface TimelineState extends EntityState<LightCard> {
    selectedCardId: string;
    lastCards: LightCard[];
    loading: boolean;
    error: string;
    data: any[];
}

/*export function sortByStartDate(card1: LightCard, card2: LightCard){
    return card1.startDate - card2.startDate;
}

export const LightCardAdapter: EntityAdapter<LightCard> = createEntityAdapter<LightCard>({
    sortComparer:sortByStartDate
});*/

export const timelineInitialState: TimelineState = LightCardAdapter.getInitialState(
    {
        selectedCardId: null,
        lastCards: [],
        loading: false,
        error: '',
        data: []
    });
