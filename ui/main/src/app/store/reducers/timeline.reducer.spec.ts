/* Copyright (c) 2018, RTE (http://www.rte-france.com)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {reducer} from './timeline.reducer';
import {timelineInitialState} from "@ofStates/timeline.state";

describe('Timeline Reducer', () => {
    describe('unknown action', () => {
        it('should return the initial state on initial state', () => {
            const action = {} as any;

            const result = reducer(timelineInitialState, action);

            expect(result).toBe(timelineInitialState);
        });
    });
});
