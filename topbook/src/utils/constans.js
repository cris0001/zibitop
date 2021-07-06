import {
  FaHome,
  FaBookOpen,
  FaPlusSquare,
  FaListAlt,
  FaQuestion,
  FaSignOutAlt,
} from 'react-icons/fa'
import AddBook from '../pages/AddBook'
import { AdminRequest, AdminBooksList, AdminAddBook } from '../components'

export const links = [
  {
    id: 1,
    text: 'strona główna',
    url: '/',
    icon: <FaPlusSquare />,
  },

  {
    id: 2,
    text: 'książki',
    url: '/books',
    icon: <FaBookOpen />,
  },
  {
    id: 3,
    text: 'nowa książka',
    url: '/add',
    icon: <FaPlusSquare />,
  },
]

export const list = [
  {
    id: 1,
    isbn: '123123123',
    title: '102 metry',
    author: 'Adam Małysz',
    addedBy: 'jane@ahonen.com',
  },
  {
    id: 2,
    isbn: '123123123',
    title: '102 metry',
    author: 'Adam Małysz',
    addedBy: 'jane@ahonen.com',
  },
  {
    id: 3,
    isbn: '123123123',
    title: '102 metry',
    author: 'Adam Małysz',
    addedBy: 'jane@ahonen.com',
  },
]

export const admin = [
  {
    id: 1,
    text: 'dodaj książkę',
    url: '/admin',
    icon: <FaPlusSquare />,
  },
  {
    id: 2,
    text: 'lista książek',
    url: '/admin/list',
    icon: <FaListAlt />,
  },
  {
    id: 3,
    text: 'prośby użytkowników',
    url: '/admin/request',
    icon: <FaQuestion />,
  },
]

export const login = [
  {
    id: 1,
    text: 'wyloguj',
    url: '/',
    icon: <FaSignOutAlt />,
  },
  {
    id: 2,
    text: 'strona główna',
    url: '/',
    icon: <FaHome />,
  },
]

export const books = [
  {
    id: 1,
    title: 'sadad',
    author: '/dadasda',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    title: 'sdasd',
    author: '/asdasdasd',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    title: 'asdsad',
    author: 'dasd/',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 4,
    title: 'asdasd',
    author: 'asdasd/',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
]
