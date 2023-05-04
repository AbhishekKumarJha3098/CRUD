//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
//import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          {/* <Route path='/users/single/:empid' element={<EmpDetail />}></Route> */}
          <Route path='/users/update/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
