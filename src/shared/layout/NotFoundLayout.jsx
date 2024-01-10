import Header from '../includes/Header'
import Footer from '../includes/Footer'
import {Outlet} from 'react-router-dom'

const NotFoundLayout = () => {
  return (
    <div className="root-main">
            <Header />
                <Outlet />
            <Footer />
    </div>
  )
}

export default NotFoundLayout
