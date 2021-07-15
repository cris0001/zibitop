import React, { useEffect, useState, useCallback } from 'react'
import app from '../firebase.js'
import { auth } from '../firebase.js'
import { db } from '../firebase'
import { Redirect, withRouter } from 'react-router'
import { Loading } from '../components'
import { Kolko } from '../components'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('xd')
  const [currentUser, setCurrentuser] = useState('')
  const [loading, setLoading] = useState(true)

  // const getRole = () => {
  //   const help = user.email
  //   console.log('sdsds')
  //   const res = getUser(help)
  // }

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user)
      setCurrentuser(user)
      //setLoading(false)
    })
  }, [])

  useEffect(() => {
    currentUser && console.log(currentUser)
  }, [currentUser])

  // const addUser = () => {
  //   if (uid) {
  //     db.collection('users').doc(uid).set({ email, password, role })
  //   }
  // }

  // if (pending) {
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   )
  // }

  return (
    <AuthContext.Provider
      value={{
        user,
        currentUser,
      }}
    >
      {loading ? <Kolko /> : children}
    </AuthContext.Provider>
  )
}
