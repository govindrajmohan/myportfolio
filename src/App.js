// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { About } from './components/About';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import Netflix from './components/Netflix';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    // <div className='container-fluid'>
    <>
      <Header/>
      <Routes>
      
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/netflix" element={<Netflix />}/>
          <Route path="/:mediaType/:id" element={<MovieDetails/>} />
    </Routes>
    <ScrollToTopButton />
    <Footer/>
  </>
    
  );
}

export default App;
