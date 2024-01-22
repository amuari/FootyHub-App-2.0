import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Home from './components/Home';
import DashboardPage from './components/DashboardPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Profiles';
import Favorites from './components/Favorites';
import Errorpage from './components/Errorpage';


function App() {
 

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profiles' element={<Feed/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/*' element={<Errorpage/>}/>
    </Routes>
   </Router>
  )
}

export default App
