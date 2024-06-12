import './assets/styles/main.scss';
import { Route,Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  
  return (
    <div className='row m-0 p-0'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
