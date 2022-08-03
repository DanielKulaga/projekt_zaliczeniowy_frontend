import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header"
import MenuList from "./components/MenuList/MenuList"
import {ShoppingCardContextProvider} from "./context/shoppingCardContext";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import Shipping from "./components/Shipping/Shipping";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import Login from "./components/Login/Login";
import LoginSuccess from "./components/LoginSuccess/LoginSuccess";
import {LoginContextProvider} from "./context/loginContext";


function App() {
  return (
      <LoginContextProvider>
          <ShoppingCardContextProvider>
              <Router>
                  <Header/>
                  <Routes>
                      <Route path="/menuList" element={<MenuList/>}/>
                      <Route path="/shopping-card" element={<ShoppingCard/>}/>
                      <Route path="/shipping-address" element={<Shipping/>}/>
                      <Route path="/payment-success" element={<PaymentSuccess/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route exact path="/login/success" element={<LoginSuccess/>}/>
                      <Route path="/" element={<MenuList/>}/>
                  </Routes>
              </Router>
          </ShoppingCardContextProvider>
      </LoginContextProvider>
  );
}

export default App;
