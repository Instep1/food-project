import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from './components/Recipe/Recipe';


function App() {
  return (
    <div className="App">
      <Header/>
      <main className='container content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/category/:name' element={<Category/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
