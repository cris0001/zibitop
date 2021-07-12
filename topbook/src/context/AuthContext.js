import React, { useEffect, useState, useCallback } from 'react'
import app from '../firebase.js'
import { auth } from '../firebase.js'
import { db } from '../firebase'
import { Redirect, withRouter } from 'react-router'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentuser] = useState('')

  const [email, setEmail] = useState('22222222222')
  const [password, setPassword] = useState('11111111')
  const [checkPassword, setCheckPassword] = useState('')
  const [checkEmail, setCheckEmail] = useState('')
  const [role, setRole] = useState('user')
  const [actualUser, setActualUser] = useState('')
  const [pending, setPending] = useState(true)

  // const getRole = () => {
  //   const help = user.email
  //   console.log('sdsds')
  //   const res = getUser(help)
  // }

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user)
      setPending(false)
      setCurrentuser(user)
      console.log(user)
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

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
