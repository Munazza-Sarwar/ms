import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import About from './About';
import Videos from './Videos';
import Reviews from './Reviews';

function App() {

  return (
    <div className = "App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' 
          element={<MainPage />} 
          key={1}/>
          <Route path='/about' 
          element={<About />} 
          key={2}/>
          <Route path='/videos' 
          element={<Videos />} 
          key={3}/>
          <Route path='/reviews' 
          element={<Reviews />} 
          key={4}/>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
