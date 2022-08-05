
import NavBar from './Component/NavBar/NavBar'; 
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Tienda de Tecnologia" style={{}}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando Categorias"/>} />
          <Route path="/item/:productoId" element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<h1>Cart</h1>}/>
           </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
