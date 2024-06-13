import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'

import Signup from './components/Signup'
import Feed from './components/Profiles'
import Favorites from './components/Favorites'
import Errorpage from './components/Errorpage'
import PlayerDetails from './components/PlayerDetails'
import RealLogin from './components/RealLogin'
import AddPlayer from './components/AddPlayer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addplayer' element={<AddPlayer />} />
        <Route path='/player/:id' element={<PlayerDetails />} />
        <Route path='/login' element={<RealLogin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profiles' element={<Feed />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/*' element={<Errorpage />} />
      </Routes>
    </Router>
  )
}

export default App
