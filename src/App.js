import './App.css';
import {Navbar,Footer} from './components'
import {Home,Item} from './pages'
import { Routes, Route } from "react-router-dom";
import Bids from './components/bids/Bids';

function App() {

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/graphics" element={<Home />} />
            {/* <Route path=":item/:id" element={<Item />} /> */}
          
           
            <Route path="/item/:index" element={<Item/>} /> {/* Add the route for the Item component */}
          <Route path="/" element={<Bids/>} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
