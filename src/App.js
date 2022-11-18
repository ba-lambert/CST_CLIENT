import { BrowserRouter,Route, Routes,Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import {useAuthContext} from "./hooks/useAuthContext"
import Home from './pages/Home'  
import './index.css'
import Register from './pages/Register'
import Login from './pages/Login'
function App() {
  const {user} = useAuthContext()
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
            path="/"
            element={user ? <Home /> :<Navigate to="/register"/>}
            />
            <Route 
            path="/login"
            element={!user ? <Login/>: <Navigate to ="/" />}
            />
            <Route 
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </div>      
      </BrowserRouter>
    </div>
  )
}

export default App