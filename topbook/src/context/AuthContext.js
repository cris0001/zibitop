import React, { useEffect, useState } from 'react'
import app from '../firebase.js'
import { Spiner } from '../components'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
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
      //   setCurrentuser(user)
      setLoading(false)
      console.log(user)
    })
  }, [])

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
      }}
    >
      {loading ? <Spiner /> : children}
    </AuthContext.Provider>
  )
}
