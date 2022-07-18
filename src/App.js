
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <ItemListContainer greeting="Tienda de Tecnologia"/>
      </header>
    </div>
  );
}

export default App;
