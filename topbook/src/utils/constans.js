import {
  FaHome,
  FaBookOpen,
  FaPlusSquare,
  FaListAlt,
  FaQuestion,
  FaSignOutAlt,
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
} from 'react-icons/fa'

export const links = [
  // {
  //   id: 1,
  //   text: 'strona główna',
  //   url: '/',
  //   icon: <FaPlusSquare />,
  // },

  {
    id: 2,
    text: 'książki',
    url: '/books',
    icon: <FaBookOpen />,
  },
  {
    id: 3,
    text: 'nowa książka',
    url: '/searchbook',
    icon: <FaPlusSquare />,
  },
]

export const list = [
  {
    id: 1,
    isbn: '123123123',
    title: '102 metry',
    date: '11.11.2011',
    author: 'Adam Małysz',
    addedBy: 'jane@ahonen.com',
    status: 'odrzucona',
  },
  {
    id: 2,
    isbn: '123123123',
    date: '11.11.2011',
    title: '102 metry',
    author: 'Adam Małysz',
    addedBy: 'jane@ahonen.com',
    status: 'odrzucona',
  },
  {
    id: 3,
    isbn: '123123123',
    title: '102 metry',
    date: '11.11.2011',
    author: 'Adam Małysz',
    addedBy: 'jane@ahonen.com',
    status: 'zaakceptowana',
  },
]

export const admin = [
  {
    id: 1,
    text: 'lista książek',
    url: '/admin',
    icon: <FaListAlt />,
  },
  {
    id: 2,
    text: 'dodaj książkę',
    url: '/admin/list',
    icon: <FaPlusSquare />,
  },
  {
    id: 3,
    text: 'prośby użytkowników',
    url: '/admin/request',
    icon: <FaQuestion />,
  },
]

export const user = [
  {
    id: 1,
    text: 'moje książki',
    url: '/user',
    icon: <FaListAlt />,
  },
  {
    id: 2,
    text: 'wysłane prośby',
    url: '/user/request',
    icon: <FaArrowRight />,
  },
  {
    id: 3,
    text: 'otrzymane prośby',
    url: '/user/inc',
    icon: <FaArrowLeft />,
  },
  {
    id: 4,
    text: 'propozycje książek',
    url: '/user/adminrq',
    icon: <FaInfoCircle />,
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
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 4,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 5,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 6,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 7,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 8,
    title: '102 metry',
    author: 'Adam Małysz',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
]
