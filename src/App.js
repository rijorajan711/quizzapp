
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Pages/Main';
import Playpage from './Pages/Playpage';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>

   <Route path='/' element={<Main />}/>
   <Route path='/playpage' element={<Playpage />} />
   </Routes>
   
   
   </BrowserRouter>

    
    </div>
  );
}

export default App;
