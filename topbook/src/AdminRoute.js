import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { db } from './firebase'
import { AuthContext } from './context/AuthContext'

const AdminRoute = ({ component: RouteComponent, ...rest }) => {
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

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        role === 'admin' ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  )
}
export default AdminRoute
