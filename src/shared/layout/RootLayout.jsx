import Header from '../includes/Header'
import Footer from '../includes/Footer'
import { Outlet } from 'react-router-dom'
import Navigation from '../includes/Navigation'

const RootLayout = () => {
  return (
    <div className="root-main">
            <Header />
            <Navigation />
              <Outlet />
            <Footer />
    </div>
  )
}

export default RootLayout
