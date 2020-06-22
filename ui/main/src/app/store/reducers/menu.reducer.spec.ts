/* Copyright (c) 2018-2020, RTE (http://www.rte-france.com)
 * See AUTHORS.txt
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * SPDX-License-Identifier: MPL-2.0
 * This file is part of the OperatorFabric project.
 */



import {reducer} from "@ofStore/reducers/menu.reducer";
import {menuInitialState, MenuState} from "@ofStates/menu.state";
import {getRandomAlphanumericValue, getRandomMenus} from "@tests/helpers";
import {
    LoadMenu,
    LoadMenuFailure,
    LoadMenuSuccess,
} from "@ofActions/menu.actions";

describe('Menu Reducer', () => {
    describe('unknown action', () => {
        it('should return the initial state unchange', () => {
            const unknownAction = {} as any;
            const actualState = reducer(menuInitialState, unknownAction);
            expect(actualState).toBe(menuInitialState);
        });

        it('should return the previous state on living state', () => {
            const unknowAction = {} as any;
            const previousState: MenuState = {
                menu: getRandomMenus(),
                loading: false,
                error: getRandomAlphanumericValue(5, 12),
                selected_iframe_url: getRandomAlphanumericValue(3,10)
            }
            const actualState = reducer(previousState, unknowAction);
            expect(actualState).toBe(previousState);
        });
    });
    describe('Load Menu action', () => {
        it('should set state load to true', () => {
            // menuInitialState.load is false
            const actualState = reducer(menuInitialState,
                new LoadMenu());
            expect(actualState).not.toBe(menuInitialState);
            expect(actualState.loading).toEqual(true);
        });
        it('should leave state load to true', () => {
            const previousState: MenuState = {
                menu: [],
                loading: true,
                error: null,
                selected_iframe_url: null
            }
            const actualState = reducer(previousState,
                new LoadMenu());
            expect(actualState).not.toBe(previousState);
            expect(actualState).toEqual(previousState);
        });
    });
    describe('LoadMenuFailure', () => {
        it('should set loading to false and message to specific message', () => {
            const actualMenu = getRandomMenus();
            const previousState: MenuState = {
                menu: actualMenu,
                loading: true,
                error: null,
                selected_iframe_url: getRandomAlphanumericValue(3,10)
            };
            const actualState = reducer(previousState,
                new LoadMenuFailure({error: new Error(getRandomAlphanumericValue(5, 12))}));
            expect(actualState).not.toBe(previousState);
            expect(actualState).not.toEqual(previousState);
            expect(actualState.loading).toEqual(false);
            expect(actualState.error).not.toBeNull();

        });
    });
    describe('LoadMenuSuccess', () => {
        it('should set loading to false and selected to corresponding payload', () => {
            const previousMenu = getRandomMenus();
            const previousState: MenuState = {
                menu: previousMenu,
                loading: true,
                error: getRandomAlphanumericValue(5, 12),
                selected_iframe_url:getRandomAlphanumericValue(5, 12)
            };
            const actualMenu = getRandomMenus();
            const actualState = reducer(previousState, new LoadMenuSuccess({menu: actualMenu}));
            expect(actualState).not.toBe(previousState);
            expect(actualState).not.toEqual(previousState);
            expect(actualState.error).toEqual(previousState.error);
            expect(actualState.loading).toEqual(false);
            expect(actualState.menu).toEqual(actualMenu);
        });
    });


});
