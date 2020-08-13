import Login from './Login'
import Forgot from './Forgot'

const authRoutes = [
  {
    path: '/',
    exact: true,
    component: Login,
    name: 'Login'
  },
  {
    path: '/forgot-password',
    component: Forgot,
    name: 'Forgot Password'
  }
]

export default authRoutes
