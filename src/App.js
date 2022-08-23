
import NavBar from './Component/NavBar/NavBar'; 
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';





function App() {
  return (
    <div className="App">
     <CartContextProvider>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Tienda de Tecnologia" style={{}}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando Categorias"/>} />
          <Route path="/item/:productoId" element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/Checkout' element={<Checkout />}/>
           </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
