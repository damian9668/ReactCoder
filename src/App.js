import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom"
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import {UserContext} from "./context/CartContext";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <UserContext value={"damian"}>
                <NavBar/>
                <Routes>
                    <Route path='/electronica' exact element={<ItemListContainer categoria={"electronica"}/>}/>
                    <Route path='/arduino' exact element={<ItemListContainer categoria={"arduino"}/>}/>
                    <Route path='/stm' exact element={<ItemListContainer categoria={"stm"}/>}/>
                    <Route path='/cart' exact element={<Cart/>}/>
                    <Route path='/productos/:id' exact element={<ItemDetail/>}/>
                </Routes>
            </UserContext>
        </div>
      </BrowserRouter>
  );
}

export default App;
