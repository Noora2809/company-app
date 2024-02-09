import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Exclusive from './Components/Exclusive';
function App() {
  return (
    <div className="App">
      
      <Header/>
      

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exclusive' element={<Exclusive/>}/>
       </Routes>
    </div>
  );
}

export default App;
