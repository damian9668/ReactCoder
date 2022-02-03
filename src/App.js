import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import CartContainer from "./components/CartContainer";
import {ProviderCustomizado} from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <ProviderCustomizado>
                <NavBar/>
                <Routes>
                    <Route path='/' exact element={<ItemListContainer/>}/>
                    <Route path='/categoria/:idCategoria' exact element={<ItemListContainer/>}/>
                    <Route path='/cart' exact element={<CartContainer/>}/>
                    <Route path='/productos/:id' exact element={<ItemDetailContainer/>}/>
                </Routes>
            </ProviderCustomizado>
        </div>
      </BrowserRouter>
  );
}

export default App;
