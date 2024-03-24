import Auth from './component/Auth'
import Profile from './component/Profile';
import './App.css';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/dummy-auth' element={<Auth/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
