import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
      <main id="main_area">
        <div className="wrapper">
          <div className="NotFoundPage">
            <h1 className='charTitle'>This page is not found, <Link to='/'>go back home</Link></h1>
          </div>
        </div>
      </main>
    )
  }
  
  export default NotFoundPage
  