import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {

  return (
    <>
      <Header />
      <div className='main-page'>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}