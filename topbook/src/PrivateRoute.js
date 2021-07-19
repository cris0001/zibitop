import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { db } from './firebase'
import { AuthContext } from './context/AuthContext'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user, role } = useContext(AuthContext)

  console.log(role)

  // const checkRole = async (email) => {
  //   const userRef = db.collection('users')
  //   const snapshot = await userRef.where('email', '==', email).get()
  //   if (snapshot.empty) {
  //     console.log('No matching documents.')
  //     return
  //   }
  //   snapshot.forEach((doc) => {
  //     //return doc.data().role
  //     setRole(doc.data().role)
  //     //console.log(doc.data().role)
  //   })
  // }

  // useEffect(() => {
  //   checkRole(user.email)
  //   console.log(role)
  // }, [])

  //if (user) {
  // if (role === 'user') {
  //   return (
  //     <Route
  //       {...rest}
  //       render={() => {
  //         return user ? children : <Redirect to='/'></Redirect>
  //       }}
  //     ></Route>
  //   )
  // } else {
  //   ;<Route
  //     {...rest}
  //     render={(routeProps) =>
  //       user && role === 'user' ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         <Redirect to={'/login'} />
  //       )
  //     }
  //   />
  // }
  //}

  // if (user) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(routeProps) => <RouteComponent {...routeProps} />}
  //     />
  //   )
  // }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        role === 'user' ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  )

  //return (
  //     <Route
  //       {...rest}
  //       render={() => {
  //         return user ? children : <Redirect to='/'></Redirect>
  //       }}
  //     ></Route>
  //   )
}
export default PrivateRoute
