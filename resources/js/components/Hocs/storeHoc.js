import React from 'react';

import { StoreContext } from '../App';

export function withStore(Component) {
    return props => {
        return <StoreContext.Consumer>{store => <Component {...props} store={store} />}</StoreContext.Consumer>;
    };
}
