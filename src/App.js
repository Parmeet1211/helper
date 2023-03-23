import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './components/main/Main';
import SignIn from './components/signin/SignIn';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Contact from './components/contact/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
