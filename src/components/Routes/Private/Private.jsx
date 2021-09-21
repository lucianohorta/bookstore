import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router';
import StoreContext from 'components/Store/Context';

const RoutesPrivate = ({ component: Component, ...rest}) => {
    const { token } = useContext(StoreContext);

    return (
        <Route 
            {...rest}
            render={() => token 
                ? <Component {...rest} />
                : <Redirect to="/login" />
            }
        />
    )
}

export default RoutesPrivate;