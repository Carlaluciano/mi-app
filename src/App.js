
import NavBar from './Component/NavBar/NavBar'; 
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <ItemListContainer greeting="Tienda de Tecnologia"/>
        <ItemDetailContainer/>
       
       </header>
    </div>
  );
}

export default App;
