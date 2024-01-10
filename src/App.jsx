import RootLayout from './shared/layout/RootLayout'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Characters from './pages/Characters'
import Plot from './pages/Plot'
import History from './pages/History'
import Map from './pages/Map'
import NotFoundPage from './pages/NotFoundPage'
import CharacterDetail from './pages/CharacterDetail'

import CharacterDetails from './pages/characterDetails';


const  App = () => {
  return (     
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={null} />
            <Route path="/plot" element={<Plot/>} />
            <Route path="/characters" element={<Characters/>} />
            <Route path="/characters/:id" element={<CharacterDetail/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/map" element={<Map/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/charson" element={<CharacterDetails/>} />
        </Routes>       
  )
}

export default App
