import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header"
import MenuList from "./components/MenuList/MenuList"
import {ShoppingCardContextProvider} from "./context/shoppingCardContext";

function App() {
  return (
      <ShoppingCardContextProvider>
          <Router>
              <Header/>
              <Routes>
                  <Route path="/menuList" element={<MenuList/>}/>
                  <Route path="/" element={<MenuList/>}/>
              </Routes>
          </Router>
      </ShoppingCardContextProvider>
  );
}

export default App;
