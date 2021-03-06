import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import CheckOut from './components/CheckOut/CheckOut';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div >
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/services' element = {<Services></Services>}></Route>
        <Route path='/services/:servicesId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element = {<Blog></Blog>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes> 
      <Footer></Footer>
    </div>
  );
}

export default App;
