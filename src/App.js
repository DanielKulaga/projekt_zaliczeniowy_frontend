import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header"
import MenuList from "./components/MenuList/MenuList"
import {ShoppingCardContextProvider} from "./context/shoppingCardContext";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import Shipping from "./components/Shipping/Shipping";

function App() {
  return (
      <ShoppingCardContextProvider>
          <Router>
              <Header/>
              <Routes>
                  <Route path="/menuList" element={<MenuList/>}/>
                  <Route path="/shopping-card" element={<ShoppingCard/>}/>
                  <Route path="/shipping-address" element={<Shipping/>}/>
                  <Route path="/" element={<MenuList/>}/>
              </Routes>
          </Router>
      </ShoppingCardContextProvider>
  );
}

export default App;
