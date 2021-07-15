import { store } from 'react-notifications-component'

export const addNotification = (message, type) => {
  return store.addNotification({
    message,
    type,
    insert: 'bottom',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  })
}
