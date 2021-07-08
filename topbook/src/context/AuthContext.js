import React, { useEffect, useState } from 'react'
import app from '../firebase.js'
import { auth } from '../firebase.js'
import { db } from '../firebase'
import { Redirect } from 'react-router'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [checkEmail, setCheckEmail] = useState('')
  const [role, setRole] = useState('user')
  const [actualUser, setActualUser] = useState('')

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setCheckPassword('')
    setCheckEmail('')
  }

  const handleLogin = () => {
    clearErrors()
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setCheckEmail(err.message)

            break
          case 'auth/wrong-password':
            setCheckPassword(err.message)

            break
        }
      })
  }

  const handleSignup = () => {
    clearErrors()
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setCheckEmail(err.message)
            break
          case 'auth/weak-password':
            setCheckPassword(err.message)
            break
        }
      })
      .then(() => {
        console.log('User created! - ')
      })
  }

  const handleLogout = () => {
    app.auth().signOut()
  }

  const addUser = () => {
    db.collection('users').doc(user.uid).set({ email, password, role })
  }

  // const getUser = async (uid) => {
  //   const xd = await db.collection('users').get(user.uid)
  //   console.log(xd)
  // }
  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  // const getRole = () => {
  //   const help = user.email
  //   console.log('sdsds')
  //   const res = getUser(help)
  // }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        password,
        email,
        handleLogin,
        handleSignup,
        checkEmail,
        checkPassword,
        setEmail,
        setPassword,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
