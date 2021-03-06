import React, { useEffect, useState } from 'react'
import app from '../firebase.js'
import { db } from '../firebase'
import { Load } from '../components'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [load, setLoad] = useState(true)
  const [role, setRole] = useState('')
  console.log(user)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        checkRole(user.email)
      }
      setUser(user)
      if (!user) {
        setTimeout(() => {
          setLoad(false)
        }, 1000)
      }

      setTimeout(() => {
        setLoad(false)
      }, 1000)
    })
  }, [])

  const checkRole = async (email) => {
    const userRef = db.collection('users')
    const snapshot = await userRef.where('email', '==', email).get()
    if (snapshot.empty) {
      console.log('No matching documents.')
      return
    }
    snapshot.forEach((doc) => {
      setRole(doc.data().role)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        load,
        setLoad,
        role,
      }}
    >
      {load ? <Load /> : children}
    </AuthContext.Provider>
  )
}
