


/*
* following configuration initialize the state of router in order to enable the currentUrl in app.component.ts
* source: https://github.com/ngrx/platform/issues/835
*/
import {RouterStateSerializer} from "@ngrx/router-store";
import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from "@angular/router";

export const initialState = {
    state: {
        url: window.location.pathname,
        params: {},
        queryParams: {}
    },
    navigationId: 0
}

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 *
 * source: https://github.com/briebug/ngrx-complex-forms
 *
 */

export class RouterStateUrl {
    /* istanbul ignore next */
    constructor(
        readonly url: string,
        readonly params: Params,
        readonly queryParams: Params) {
    }
}

export class CustomRouterStateSerializer
    implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const {url} = routerState;
        const params = this.extractParams(routerState.root);
        const queryParams = routerState.root.queryParams;
        return new RouterStateUrl(url, params, queryParams);
    }

    private extractParams(state: ActivatedRouteSnapshot): Params {
        let params: Params = {...state.params};
        for (let child of state.children) {
            params = {...params, ...this.extractParams(child)}
        }
        return params;
    }
}
