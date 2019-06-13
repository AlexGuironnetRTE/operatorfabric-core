/* Copyright (c) 2018, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {LightCard} from '@ofModel/light-card.model';
import {Filter} from "@ofModel/feed-filter.model";
import {FilterType} from "@ofServices/filter.service";

/**
 * The Feed State consist of:
 *  * EntityState of LightCard
 *  * selectedCardId: the currently selected card id
 *  * lastCards the last cards added / updated to the feed
 *  * loading: weather there is an ongoing state modification
 *  * message: last message during state processing
 *  * filters: a collection of filter to apply to the rendered feed
 */
export interface CardFeedState extends EntityState<LightCard> {
    selectedCardId: string;
    lastCards: LightCard[];
    loading: boolean;
    error: string;
    filters: Map<FilterType,Filter>;
}

export function sortByStartDate(card1: LightCard, card2: LightCard){
    return card1.startDate - card2.startDate
}

export const LightCardAdapter: EntityAdapter<LightCard> = createEntityAdapter<LightCard>({
    sortComparer:sortByStartDate
});

export const feedInitialState: CardFeedState = LightCardAdapter.getInitialState(
    {
        selectedCardId: null,
        lastCards: [],
        loading: false,
        error: '',
        filters: new Map()
    });