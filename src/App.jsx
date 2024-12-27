import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'/* لتغيير الاسم as */
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import MainPage from './MainPage'
import Support from './Support'
import Enterprise from './Enterprise'
import Features from './Features'

function App() {
  

  /*
  route index -> main page with out path
  */

  return(
    <>
    <Router>
    <Header/>
      <Routes> 
        <Route index element={<MainPage/>} />
        <Route path="support" element={<Support/>} />
        <Route path="enterprise" element={<Enterprise/>} />
        <Route path="features" element={<Features/>} />
      </Routes>
    
    
    <MainPage/>
    
    </Router>

    </>
  )
}

export default App
