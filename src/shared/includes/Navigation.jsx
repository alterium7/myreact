import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="nav-area">
            <div className='wrapper'>
                <nav className="nav-con">
                    <ul>
                        <li><Link to="/">The World</Link></li>
                        <li><Link to="/plot">Plot</Link></li>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/map">Map</Link></li>
                        <li><Link to="/charson">My JSON Data</Link></li>

                    </ul>
                </nav>
            </div>
        </div>
    )
  }
  
  export default Navigation