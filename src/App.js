import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer greeting={"QUICK IC"}></ItemListContainer>
        <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
