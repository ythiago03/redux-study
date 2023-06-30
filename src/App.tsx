import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import Contact from './Contact';
import Login from './Login';
import Home from './Home';

function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/login'>Login</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </Provider>
    </>
  )
}

export default App
