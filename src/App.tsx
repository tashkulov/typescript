import { Route, Routes, BrowserRouter, Link, Outlet } from 'react-router-dom';
import Aboutus from './ROUTING/about';
import Main from './ROUTING';
import Contact from './ROUTING/contact';
import Header from './ROUTING/header';
import allin from './typescript/app';

const App = () => {
  allin()
  return (
    <BrowserRouter>
   <Header/>
    <Routes>
     

      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={`404 ошибка!!! Не правильный сервер`} />
    </Routes>
  </BrowserRouter>

  
  );
};

export default App;
