import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"QUICK IC"}/>}></Route>
              <Route path='/arduino' element={<ItemDetailContainer api={"arduino"}/>}></Route>
              <Route path='/stm' element={<ItemDetailContainer api={"stm32"}/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
