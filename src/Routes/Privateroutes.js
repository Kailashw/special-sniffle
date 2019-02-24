import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const Privateroutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                localStorage.getItem("email") ?
                    (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: '/'}
                            }}
                        />
                    )
        }
    />

)