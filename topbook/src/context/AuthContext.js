import React, { useEffect, useState } from 'react'
import app from '../firebase.js'
import { Spiner } from '../components'
import { db } from '../firebase'
import { Load } from '../components'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentuser] = useState('')
  const [loading, setLoading] = useState(true)
  const [role, setRole] = useState('')
  console.log(user)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        checkRole(user.email)
      }
      setUser(user)
      if (!user) {
        setLoading(false)
      }

      setTimeout(() => {
        setLoading(false)
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
      // console.log(doc.data().role)
      // setLoading(false)
    })
  }

  // if (user) {
  //   checkRole(user.email)
  // }

  // useEffect(() => {
  //   setRole(checkRole(user.email))
  // }, [user])
  // console.log(role)

  // useEffect(() => {
  //   checkRole('')
  // }, [])

  // useEffect(() => {
  //   currentUser && console.log(currentUser)
  // }, [currentUser])

  // const addUser = () => {
  //   if (uid) {
  //     db.collection('users').doc(uid).set({ email, password, role })
  //   }
  // }

  return (
    <AuthContext.Provider
      value={{
        user,
        currentUser,
        role,
      }}
    >
      {loading ? <Load /> : children}
    </AuthContext.Provider>
  )
}
