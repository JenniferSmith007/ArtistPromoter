import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import Error from './components/Error';


const App = () => {
  return( 
  <Router>
  
      
     <nav>
      <Link to='/' className='home-link'>Home </Link>
      <Link to='/services'className='services-link'>Services</Link>
      <Link to='/contact' className='contact-link'>Contact</Link>
     
     </nav>
    

    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/services' element={<Services />} />
<Route path='/contact' element={<Contact />} />
<Route path='*' element={<Error />}/>
  </Routes>

  </Router>
  );
}

export default App;
