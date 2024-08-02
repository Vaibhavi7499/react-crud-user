import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Layout/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/adduser/:id' element={<AddUser/>}/>
      <Route path='/viewuser/:id' element={<ViewUser/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
