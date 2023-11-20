import {BrowserRouter, Routes, Route} from 'react-router-dom'
import APIlist from './apiList/APIlist'
import Comp2 from './calculatrice/comp2'
import Compimg from './slide/Compimg'
import Todolist from './todolistt/todolist'
import Home from './home/home'
import Lang from './multilang/multiL'
import Context from './context'
import NavResp from './navbar/navbar'


function App() {
  
  return (
    <div className="App">
      
      <Context>
      <BrowserRouter basename='cc1_react'>
        <Routes>   
          <Route path='/calculatrice' element={<Comp2/>}/>
          <Route path='/slide' element={<Compimg/>}/>
          <Route path='/todolist' element={<Todolist/>}/>
          <Route path='/api' element={<APIlist/>}/>
          <Route path='/multilang' element={<Lang/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  </Context>

    </div>
  );
}

export default App;
