import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const AnonRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to={'/login'} /> : <RouteComponent {...routeProps} />
      }
    />
  )
}
export default AnonRoute
