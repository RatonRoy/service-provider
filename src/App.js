import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="">
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/services' element = {<Services></Services>}></Route>
      </Routes> 
      <Footer></Footer>
    </div>
  );
}

export default App;
